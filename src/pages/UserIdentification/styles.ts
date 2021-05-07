import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 54px;
  padding-right: 54px;
`;

export const Header = styled.View`
  align-items: center;
`;
export const Input = styled.TextInput<{ isFilled?: boolean }>`
  border-bottom-width: 1px;
  font-family: ${(props) => props.theme.fonts.text};
  border-color: ${(props) =>
    props.isFilled ? props.theme.colors.green : props.theme.colors.gray};
  color: ${(props) => props.theme.colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 20px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;
