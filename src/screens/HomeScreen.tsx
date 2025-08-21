import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { useAuth } from '../context/AuthContext';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Avatar from '../components/atoms/Avatar';
import ProfileCard from '../components/molecules/ProfileCard';

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text variant="h2" style={styles.title}>
            Hello, {user.name}!
            </Text>
          </View>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Avatar
              size="xlarge"
              initials={getInitials(user.name)}
              style={styles.avatar}
            />
          
          </View>
        </View>

        <View style={styles.infoSection}>
          <ProfileCard
            icon="person"
            label="Name"
            value={user.name}
          />
          <ProfileCard
            icon="email"
            label="Email"
            value={user.email}
          />
     
        </View>

        <View>
        
          <Button
            title="Logout"
            variant="primary"
            style={styles.logoutButton}
            onPress={handleLogout}
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: SIZES.large,
  },
  header: {
    marginBottom: SIZES.xlarge,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  title: {
    marginRight: SIZES.small,
  },
  starIcon: {
    marginTop: 4,
  },
  welcome: {
    marginTop: SIZES.small,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: SIZES.xlarge,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: SIZES.large,
  },
  avatar: {
    borderWidth: 4,
    borderColor: COLORS.surface,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: SIZES.small,
    ...SHADOWS.small,
  },
  role: {
    color: COLORS.secondary,
    marginTop: SIZES.small,
  },
  infoSection: {
    marginBottom: SIZES.xlarge,
  },
  editButton: {
    marginBottom: SIZES.small,
  },
  logoutButton: {
    borderColor: COLORS.error,
  },
});

export default HomeScreen; 