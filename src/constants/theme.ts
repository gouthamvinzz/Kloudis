import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // Primary colors
  primary: '#c01f2f',
  primaryDark: '#1976D2',
  primaryLight: '#BBDEFB',
  secondary: '#60A5FA', // Blue
  secondaryLight: '#93C5FD',
  secondaryDark: '#3B82F6',
  // Background colors
  background: '#f4e7e6', // Dark background
  surface: 'white',
  surfaceLight: '#c01f2f',

  // Status colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',

  // Text colors
  text: 'black',
  textLight: 'black',
  textDark: 'black',
  textMuted: 'black',

  // Functional colors
  border: '#4B5563',
  divider: '#374151',
  overlay: 'rgba(0, 0, 0, 0.5)',
  white: '#FFFFFF',
  black: '#000000',
  gray:'gray',
  transparent: 'transparent',

  // Gradient colors
  gradientStart: '#8B5CF6',
  gradientEnd: '#60A5FA',
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
  xxxlarge: 48,

  // Screen dimensions
  width,
  height,

  // Card sizes
  cardRadius: 20,
  buttonRadius: 12,

  // Avatar sizes
  avatarSmall: 40,
  avatarMedium: 60,
  avatarLarge: 80,
  avatarXLarge: 120,
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
    fontSize: SIZES.xxxlarge,
  },
  h2: {
    fontFamily: 'System',
    fontWeight: '700' as const,
    fontSize: SIZES.xxlarge,
  },
  h3: {
    fontFamily: 'System',
    fontWeight: '600' as const,
    fontSize: SIZES.xlarge,
  },
  h4: {
    fontFamily: 'System',
    fontWeight: '600' as const,
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