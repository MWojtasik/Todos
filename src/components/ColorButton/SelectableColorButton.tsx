import React from 'react';
import { View } from 'react-native';
import { SelectableButton } from '../SelectableButton/SelectableButton';

interface ColorButtonProps {
  color: string,
  size: number,
  onPress: () => void,
  selected?: boolean
}

export const SelectableColorButton = ({
  onPress, color, size, selected,
} : ColorButtonProps): JSX.Element => (
  <SelectableButton
    size={size}
    onPress={onPress}
    selected={selected}
  >
    <View style={{
      zIndex: 3,
      backgroundColor: color,
      borderRadius: size / 2,
      width: size,
      height: size,
    }}
    />
  </SelectableButton>
);
