import React from 'react';
import {Text} from '../contants/theme';
import fonts from '../contants/fonts';

interface TextProps {
  children: string;
  bold?: boolean;
  medium?: boolean;
  style?: object | Array<object>;
  variant?: string;
}

const AppText = ({
  children,
  style = [],
  medium = false,
  bold = false,
  variant = 'body',
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

  return (
    <Text variant={variant} style={textStyles}>
      {children}
    </Text>
  );
};

export default AppText;
