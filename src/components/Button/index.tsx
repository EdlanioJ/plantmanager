import React, { RefAttributes } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
