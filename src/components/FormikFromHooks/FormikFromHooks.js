import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FormikFromHooks.css';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = values => {
  console.log('Form values', values);
};
// const validate = values => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format';
//   }
//   if (!values.channel) {
//     errors.channel = 'Required';
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

export const FormikFromHooks = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log('Visited values', formik.touched);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={formik.handleSubmit}>
        <div className="control">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            {...formik.getFieldProps('name')}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="control">
          <label htmlFor="channel">Channel</label>
          <input
            name="channel"
            id="channel"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
