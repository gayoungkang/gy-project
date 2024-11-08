import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      disabled: {
        main: string;
        light: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      light: string;
      dark: string;
      white: string;
      black: string;
      divider: string;
      background: {
        main: string;
        light: string;
        dark: string;
      };
    };
    borderRadius: string;
    size: {
      large: string;
      medium: string;
      small: string;
    };
    typography: {
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h5: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h6: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      subtitle1: {
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
      };
      subtitle2: {
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
      };
      body1: {
        fontSize: string;
        fontWeight: number;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
      };
      caption: {
        fontSize: string;
        lineHeight: number;
      };
      overline: {
        textDecoration: string;
        fontSize: string;
        fontWeight: string;
        color: string;
        whiteSpace: string;
      };
    };
    fontSize: {
      large: string;
      medium: string;
      small: string;
    };
  }
}
