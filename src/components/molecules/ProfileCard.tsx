import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../../constants/theme';
import Text from '../atoms/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ProfileCardProps {
  icon: string;
  label: string;
  value: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ icon, label, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={24} color={COLORS.white} />
      </View>
      <View style={styles.content}>
        <Text variant="body1" color={COLORS.textMuted} style={styles.label}>
          {label}:
        </Text>
        <Text variant="body1" style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.buttonRadius,
    padding: SIZES.medium,
    marginBottom: SIZES.medium,
    ...SHADOWS.small,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.medium,
  },
  content: {
    flex: 1,
  },
  label: {
    fontWeight: '600',
  },
  value: {
    marginTop: SIZES.base / 2,
  },
});

export default ProfileCard; 