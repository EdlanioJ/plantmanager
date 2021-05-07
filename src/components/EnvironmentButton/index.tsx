import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}
export const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Container isActive={active} {...rest}>
      <Title isActive={active}>{title}</Title>
    </Container>
  );
};
