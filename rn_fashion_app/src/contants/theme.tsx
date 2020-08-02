import {BaseTheme, createText, createTheme} from '@shopify/restyle';
import colors from './colors';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme: BaseTheme = createTheme({
  colors: {
    ...colors,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      color: 'textPrimaryColor',
    },
    title2: {
      fontSize: 23,
      color: 'textPrimaryColor',
      lineHeight: 30,
    },
    body: {
      fontSize: 16,
      color: 'bodyText',
      lineHeight: 24,
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Text = createText<Theme>();

export default theme;
