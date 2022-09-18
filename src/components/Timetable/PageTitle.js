import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const PageTitle = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};
