import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import { COLORS, SIZES } from '../../constants/theme';

interface ErrorTextProps {
  message?: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ message }) => {
  if (!message) return null;

  return (
    <Text
      variant="caption"
      color={COLORS.error}
      style={styles.error}
    >
      {message}
    </Text>
  );
};

const styles = StyleSheet.create({
  error: {
    marginTop: SIZES.base / 2,
  },
});

export default ErrorText; 