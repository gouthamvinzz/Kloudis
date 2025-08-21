import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

interface InputProps extends TextInputProps {
  error?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<InputProps> = ({
  error,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    ...FONTS.body1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.text,
  },
  inputError: {
    borderColor: COLORS.error,
  },
});

export default Input; 