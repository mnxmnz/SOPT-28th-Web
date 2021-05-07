import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      button: string;
      text: string;
      border: string;
    };
  }
}
