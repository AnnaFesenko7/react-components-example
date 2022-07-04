import React from 'react';

import Alert from '../Alert/Alert';
import Container from 'components/Container/Container';
export const Alerts = () => {
  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Alert text="Операция не возможна" type="error" />
      <Alert text="Операция может занять длительное время" type="warning" />
      <Alert text="Операция успешна" type="success" />
    </Container>
  );
};
