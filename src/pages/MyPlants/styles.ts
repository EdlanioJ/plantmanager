import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Spotlight = styled.View`
  background-color: ${(props) => props.theme.colors.blue_light};
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.text};
  padding-right: 20px;
  padding-left: 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 24px;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Box = styled.View`
  flex: 1;
  align-items: center;
`;

export const BoxText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 12px;
  color: ${(props) => props.theme.colors.heading};
  text-align: center;
`;
