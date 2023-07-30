import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import React from 'react';

export const RadioButtons = props => {
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
                  type="radio"
                  value={option.value}
                  checked={option.value === field.value}
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
