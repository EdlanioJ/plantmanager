import React from 'react';

import LoadAnimation from '../../assets/load.json';
import { Animation, Container } from './styles';

export const Load: React.FC = () => {
  return (
    <Container>
      <Animation autoPlay loop source={LoadAnimation} />
    </Container>
  );
};
