import { Formik, Form } from 'formik';
import { FormikControl } from './FormikControl';
import * as Yup from 'yup';

import './FormikComponent.css';

const initialValues = {
  // name: '',
  email: '',
  // channel: '',
  // comments: '',
  // address: '',
  // social: {
  //   facebook: '',
  //   twitter: '',
  // },
  // phoneNumber: ['', ''],
  // phNumbers: [''],
};

const onSubmit = (values, submitProps) => {
  console.log(values);
};

const validationSchema = Yup.object({
  // name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  // channel: Yup.string().required('Required'),
  // comments: Yup.string().required('Required'),
  // address: Yup.string().required('Required'),
});

export const FormikWithReusableControls = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
            />
            <button
              // disabled={!formik.isValid || formik.isSubmitting}
              // disabled={!formik.isValid}
              type="submit"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
