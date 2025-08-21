import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProps } from '../types/navigation.types';
import { ROUTES } from '../constants/routes';
import { COLORS, SIZES } from '../constants/theme';
import { useAuth } from '../context/AuthContext';

// Components
import LoginForm from '../components/organisms/LoginForm';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';

const LoginScreen = () => {
  const navigation = useNavigation<AuthScreenProps<typeof ROUTES.LOGIN>['navigation']>();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      await login(credentials);
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupPress = () => {
    navigation.navigate(ROUTES.SIGNUP);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Text variant="h1" style={styles.title}>
                Welcome
              </Text>
              <Text variant="body1" color={COLORS.textLight} style={styles.subtitle}>
                Sign in to continue
              </Text>
            </View>

            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

            <View style={styles.footer}>
              <Text variant="body2" color={COLORS.textLight}>
                Don't have an account?
              </Text>
              <Button
                title="Sign Up"
                variant="outline"
                size="small"
                onPress={handleSignupPress}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'android' ? SIZES.xlarge : 0,
  },
  content: {
    flex: 1,
    padding: SIZES.large,
    justifyContent: 'center',
    minHeight: '100%',
  },
  header: {
    marginBottom: SIZES.xlarge,
    alignItems: 'center',
  },
  title: {
    marginBottom: SIZES.small,
  },
  subtitle: {
    textAlign: 'center',
  },
  footer: {
    marginTop: SIZES.xlarge,
    alignItems: 'center',
    gap: SIZES.small,
  },
});

export default LoginScreen; 