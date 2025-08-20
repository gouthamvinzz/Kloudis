import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormInput from '../molecules/FormInput';
import PasswordInput from '../molecules/PasswordInput';
import Button from '../atoms/Button';
import { SIZES } from '../../constants/theme';
import { LoginCredentials } from '../../types/auth.types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!credentials.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await onSubmit(credentials);
      } catch (error) {
        // Handle submission error
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FormInput
        label="Email*"
        placeholder="Enter your email"
        value={credentials.email}
        onChangeText={(text: string) => setCredentials({ ...credentials, email: text })}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <PasswordInput
        value={credentials.password}
        onChangeText={(text: string) => setCredentials({ ...credentials, password: text })}
        error={errors.password}
        autoComplete="password"
      />
      <Button
        title="Login"
        onPress={handleSubmit}
        isLoading={isLoading}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    marginTop: SIZES.medium,
  },
});

export default LoginForm; 