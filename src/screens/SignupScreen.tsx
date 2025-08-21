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
import SignupForm from '../components/organisms/SignupForm';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';

const SignupScreen = () => {
  const navigation = useNavigation<AuthScreenProps<typeof ROUTES.SIGNUP>['navigation']>();
  const { signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (credentials: { name: string; email: string; password: string }) => {
    setIsLoading(true);
    try {
      await signup(credentials);
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginPress = () => {
    navigation.navigate(ROUTES.LOGIN);
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
                Create Account
              </Text>
              <Text variant="body1" color={COLORS.textLight} style={styles.subtitle}>
                Sign up to get started
              </Text>
            </View>

            <SignupForm onSubmit={handleSignup} isLoading={isLoading} />

            <View style={styles.footer}>
              <Text variant="body2" color={COLORS.textLight}>
                Already have an account?
              </Text>
              <Button
                title="Login"
                variant="outline"
                size="small"
                onPress={handleLoginPress}
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

export default SignupScreen; 