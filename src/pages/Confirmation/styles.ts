import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 76px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  text-align: center;
  font-size: 17px;
  padding-bottom: 10px;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
`;
