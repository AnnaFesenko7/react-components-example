import { Input } from './Input';

export const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    default:
      return null;
  }
};
