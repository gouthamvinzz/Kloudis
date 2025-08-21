import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import Text from './Text';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  initials: string;
  style?: ViewStyle;
}

const Avatar: React.FC<AvatarProps> = ({
  size = 'medium',
  initials,
  style,
}) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return SIZES.avatarSmall;
      case 'large':
        return SIZES.avatarLarge;
      case 'xlarge':
        return SIZES.avatarXLarge;
      default:
        return SIZES.avatarMedium;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'small':
        return SIZES.medium;
      case 'large':
        return SIZES.xxlarge;
      case 'xlarge':
        return SIZES.xxxlarge;
      default:
        return SIZES.large;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: getSize(),
          height: getSize(),
          borderRadius: getSize() / 2,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.initials,
          {
            fontSize: getFontSize(),
          },
        ]}
      >
        {initials}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default Avatar; 