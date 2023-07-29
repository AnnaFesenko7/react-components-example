import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

export const Input = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
