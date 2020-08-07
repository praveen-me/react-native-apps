import {createText, createTheme} from '@shopify/restyle';
import colors from './colors';

const theme = createTheme({
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
    button: {
      fontSize: 15,
      color: 'bodyText',
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const Text = createText<Theme>();

export default theme;
