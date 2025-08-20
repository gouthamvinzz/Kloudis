import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import ErrorText from '../atoms/ErrorText';
import { SIZES } from '../../constants/theme';

interface FormInputProps {
  label: string;
  error?: string;
  [key: string]: any; // For other TextInput props
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text variant="body2" style={styles.label}>
        {label}
      </Text>
      <Input
        error={!!error}
        {...props}
      />
      <ErrorText message={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.medium,
  },
  label: {
    marginBottom: SIZES.base,
  },
});

export default FormInput; 