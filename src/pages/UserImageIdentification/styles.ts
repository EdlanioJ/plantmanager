import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;
