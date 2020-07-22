import React from 'react';
import {Text as RNText} from 'react-native';
import fonts from '../contants/fonts';

interface TextProps {
  children: string;
  bold?: boolean;
  medium?: boolean;
  style?: object | Array<object>;
}

const AppText = ({
  children,
  style = [],
  medium = false,
  bold = false,
}: TextProps) => {
  const internalStyles = {
    fontFamily: fonts.normal,
  };

  if (medium) {
    internalStyles.fontFamily = fonts.medium;
  } else if (bold) {
    internalStyles.fontFamily = fonts.bold;
  }

  const textStyles = Array.isArray(style)
    ? [...style, internalStyles]
    : {...style, ...internalStyles};

  return <RNText style={textStyles}>{children}</RNText>;
};

export default AppText;
