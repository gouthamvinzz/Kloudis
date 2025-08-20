import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { COLORS, SIZES, SHADOWS } from '../../constants/theme';
import { User } from '../../types/auth.types';

interface UserProfileProps {
  user: User;
  onLogout: () => Promise<void>;
  isLoading?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  onLogout,
  isLoading = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text variant="h2" style={styles.welcome}>
            Hello {user.name}!
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.infoRow}>
            <Text variant="body2" color={COLORS.textLight}>
              Name
            </Text>
            <Text variant="body1">{user.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="body2" color={COLORS.textLight}>
              Email
            </Text>
            <Text variant="body1">{user.email}</Text>
          </View>
        </View>
      </View>
      <Button
        title="Logout"
        onPress={onLogout}
        isLoading={isLoading}
        variant="outline"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: SIZES.medium,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base * 2,
    padding: SIZES.large,
    ...SHADOWS.medium,
  },
  header: {
    marginBottom: SIZES.large,
  },
  welcome: {
    textAlign: 'center',
  },
  content: {
    gap: SIZES.medium,
  },
  infoRow: {
    gap: SIZES.base / 2,
  },
  button: {
    marginTop: SIZES.xlarge,
  },
});

export default UserProfile; 