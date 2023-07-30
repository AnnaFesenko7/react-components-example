import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import React from 'react';

export const CheckboxGroup = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  {...field}
                  id={option.value}
                  type="checkbox"
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
