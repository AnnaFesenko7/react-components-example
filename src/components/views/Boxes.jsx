import React from 'react';

import Container from 'components/Container/Container';
import Box from 'components/Box/Box';

export const Boxes = () => {
  return (
    <Container>
      <Box type="small" classNames="big teal" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" />
    </Container>
  );
};
