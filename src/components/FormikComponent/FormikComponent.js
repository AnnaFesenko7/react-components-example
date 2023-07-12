import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextError } from './TextError';

import './FormikComponent.css';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
};

const onSubmit = values => {
  console.log('Form values', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
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
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div className="control">
            <label htmlFor="channel">Channel</label>
            <Field
              name="channel"
              id="channel"
              type="text"
              placeholder="Youtube channel name"
            />
            <ErrorMessage name="channel" component={TextError} />
          </div>
          <div className="control">
            <label htmlFor="comments">Comments</label>
            <Field name="comments" id="comments" as="textarea" placeholder="" />
            <ErrorMessage name="comments">
              {errorMsg => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
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
          </div>
          <div className="control">
            <label htmlFor="facebook">Facebook</label>
            <Field name="social.facebook" type="text" id="facebook" />
            <ErrorMessage name="social.facebook" component={TextError} />
          </div>
          <div className="control">
            <label htmlFor="twitter">Twitter</label>
            <Field name="social.twitter" type="text" id="twitter" />
            <ErrorMessage name="social.twitter" component={TextError} />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};
