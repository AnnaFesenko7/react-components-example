import React from 'react';
import DateView from 'react-datepicker';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              {...field}
              {...rest}
              id={name}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
