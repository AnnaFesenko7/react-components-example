import { Formik, Form } from 'formik';
import { FormikControl } from './FormikControl';
import * as Yup from 'yup';

import './FormikComponent.css';

const initialValues = {
  email: '',
  description: '',
  selectOption: '',
  radioOption: '',
  checkboxOption: [],
};

const onSubmit = (values, submitProps) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  description: Yup.string().required('Required'),
  selectOption: Yup.string().required('Required'),
  radioOption: Yup.string().required('Required'),
  checkboxOption: Yup.array().required('Required'),
});

const dropDownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' },
];
const radioOptions = [
  { key: 'Option 1', value: 'rOption1' },
  { key: 'Option 2', value: 'rOption2' },
  { key: 'Option 3', value: 'rOption3' },
];
const checkboxOptions = [
  { key: 'Option 1', value: 'cOption1' },
  { key: 'Option 2', value: 'cOption2' },
  { key: 'Option 3', value: 'cOption3' },
];
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
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              type="text"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropDownOptions}
            />
            <FormikControl
              control="radio"
              label="Pick one option"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox topic"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
