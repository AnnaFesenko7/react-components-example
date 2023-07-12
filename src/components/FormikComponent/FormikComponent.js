import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './FormikComponent.css';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
};

const onSubmit = values => {
  console.log('Form values', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string(),
  address: Yup.string().required('Required'),
});

export const FormikComponent = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form>
          <div className="control">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" id="name" />
            <ErrorMessage name="name" />
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="control">
            <label htmlFor="channel">Channel</label>
            <Field
              name="channel"
              id="channel"
              type="text"
              placeholder="Youtube channel name"
            />
            <ErrorMessage name="channel" />
          </div>
          <div className="control">
            <label htmlFor="comments">Comments</label>
            <Field name="comments" id="comments" as="textarea" placeholder="" />
            <ErrorMessage name="comments" />
          </div>
          <div className="control">
            <label htmlFor="address">Address</label>
            <Field name="address">
              {props => {
                const { field, meta } = props;
                console.log('props', props);
                return (
                  <div>
                    <input id="address" {...field} type="text" />
                    {meta.error && meta.touched ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
            <ErrorMessage name="email" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};
