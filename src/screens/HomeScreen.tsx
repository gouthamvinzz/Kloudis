import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { useAuth } from '../context/AuthContext';

// Components
import UserProfile from '../components/organisms/UserProfile';
import Text from '../components/atoms/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { user, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text variant="h2" style={styles.title}>
          Dashboard
        </Text>
      </View>

      <UserProfile
        user={user}
        onLogout={handleLogout}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    textAlign: 'center',
  },
});

export default HomeScreen; 