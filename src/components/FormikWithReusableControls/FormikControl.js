import { Input } from './Input';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { RadioButtons } from './RadioButtons';
import { CheckboxGroup } from './Checkbox';
import { DatePicker } from './DatePicker';

export const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};
