import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

export const Textarea = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
