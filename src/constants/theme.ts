import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // Primary colors
  primary: '#c01f2f',
  primaryDark: '#1976D2',
  primaryLight: '#BBDEFB',

  // Secondary colors
  secondary: '#FF4081',
  secondaryDark: '#C51162',
  secondaryLight: '#FF80AB',

  // Status colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',

  // Grayscale
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#9E9E9E',
  darkGray: '#616161',
  black: '#000000',

  // Functional colors
  background: '#FFFFFF',
  surface: '#FFFFFF',
  border: '#E0E0E0',
  text: '#212121',
  textLight: '#757575',
  transparent: 'transparent',

  // App color

};

export const SIZES = {
  // Global sizes
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
  xxlarge: 32,

  // Screen dimensions
  width,
  height,
};

export const FONTS = {
  regular: {
    fontFamily: 'System',
    fontWeight: '400' as const,
  },
  medium: {
    fontFamily: 'System',
    fontWeight: '500' as const,
  },
  bold: {
    fontFamily: 'System',
    fontWeight: '700' as const,
  },
  h1: {
    fontFamily: 'System',
    fontWeight: '700' as const,
    fontSize: SIZES.xxlarge,
  },
  h2: {
    fontFamily: 'System',
    fontWeight: '700' as const,
    fontSize: SIZES.xlarge,
  },
  h3: {
    fontFamily: 'System',
    fontWeight: '700' as const,
    fontSize: SIZES.large,
  },
  body1: {
    fontFamily: 'System',
    fontWeight: '400' as const,
    fontSize: SIZES.medium,
  },
  body2: {
    fontFamily: 'System',
    fontWeight: '400' as const,
    fontSize: SIZES.font,
  },
  caption: {
    fontFamily: 'System',
    fontWeight: '400' as const,
    fontSize: SIZES.small,
  },
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 6,
  },
};

export default { COLORS, SIZES, FONTS, SHADOWS }; 