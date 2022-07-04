import { Fragment } from 'react';

const Button = props => {
  const buttonStyle = {
    backgroundColor: props.color,
  };
  if (props.widthBorder) {
    buttonStyle.border = '10px solid teal';
  }
  return (
    <Fragment>
      <button style={buttonStyle}>{props.children}</button>
      <p>
        {props.label}
        {props.widthBorder && '-border'}
      </p>
    </Fragment>
  );
};
export default Button;

Button.defaultProps = {
  widthBorder: false,
};
