import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

interface CustomTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
  color?: string;
}

const Text: React.FC<CustomTextProps> = ({
  variant = 'body1',
  color = COLORS.text,
  style,
  children,
  ...props
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'body2':
        return styles.body2;
      case 'caption':
        return styles.caption;
      default:
        return styles.body1;
    }
  };

  return (
    <RNText
      style={[getVariantStyle(), { color }, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: FONTS.h1,
  h2: FONTS.h2,
  h3: FONTS.h3,
  body1: FONTS.body1,
  body2: FONTS.body2,
  caption: FONTS.caption,
});

export default Text; 