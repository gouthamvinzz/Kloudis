import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormInput from './FormInput';
import { COLORS, SIZES } from '../../constants/theme';

interface PasswordInputProps {
  label?: string;
  error?: string;
  [key: string]: any; // For other TextInput props
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = 'Password',
  error,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <FormInput
        label={label+'*'}
        error={error}
        secureTextEntry={!isVisible}
        {...props}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={toggleVisibility}
      >
        <Icon
          name={isVisible ? 'visibility' : 'visibility-off'}
          size={24}
          color={COLORS.gray}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: SIZES.medium,
    top: 28,
    padding: SIZES.base,
  },
});

export default PasswordInput; 