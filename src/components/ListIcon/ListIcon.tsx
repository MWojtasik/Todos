import React from 'react';
import { Avatar, Colors } from 'react-native-paper';

interface ListIconProps {
  icon: string,
  color: string,
  size?: number
}

export const ListIcon = ({
  icon, color, size = 45,
}: ListIconProps): JSX.Element => {
  return (
    <Avatar.Icon
      icon={icon}
      style={{
        margin: 20,
        backgroundColor: color,
      }}
      color={Colors.white}
      size={size}
    />
  );
};
