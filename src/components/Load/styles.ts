import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
`;

export const Animation = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;
