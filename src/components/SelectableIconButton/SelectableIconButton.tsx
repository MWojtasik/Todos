import { Avatar, Colors } from 'react-native-paper';
import React from 'react';
import { SelectableButton } from '../SelectableButton/SelectableButton';

interface IconButtonProps {
  size: number,
  icon: string,
  onPress: () => void,
  selected?: boolean
}

export const SelectableIconButton = ({
  onPress, icon, size, selected,
} : IconButtonProps): JSX.Element => (
  <SelectableButton
    size={size}
    onPress={onPress}
    selected={selected}
  >
    <Avatar.Icon
      size={size}
      color={Colors.grey900}
      icon={icon}
      style={{
        zIndex: 3,
        backgroundColor: Colors.grey400,
        borderRadius: size / 2,
        width: size,
        height: size,
      }}
    />
  </SelectableButton>
);
