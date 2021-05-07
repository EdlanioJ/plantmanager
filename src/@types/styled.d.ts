import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string;
    colors: {
      primary: string;
      background: string;
      button: {
        background: string;
        text: string;
      };
      heading: string;
      shape: string;
      white: string;
      body_dark: string;
      body_light: string;
      green: string;
      green_dark: string;
      green_light: string;
      gray: string;
      gray_light: string;
      blue: string;
      blue_light: string;
      red: string;
    };
    fonts: {
      heading: string;
      text: string;
      complement: string;
    };
  }
}
