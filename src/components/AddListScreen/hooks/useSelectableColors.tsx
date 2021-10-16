import React, { useMemo, useState } from 'react';
import { selectableColors } from '../../../consts/selectableColors';
import { SelectableColorButton } from '../../ColorButton/SelectableColorButton';

interface UseSelectableColors {
  (): { selectableColorsElements: JSX.Element[], selectedColor:string }
}

export const useSelectableColors: UseSelectableColors = () => {
  const [selectedColor, setSelectedColor] = useState(selectableColors[0]);

  const selectableColorsElements = useMemo(() => selectableColors.map((color) => {
    return (
      <SelectableColorButton
        key={color}
        selected={selectedColor === color}
        color={color}
        size={40}
        onPress={() => setSelectedColor(color)}
      />
    );
  }), [selectedColor]);

  return { selectableColorsElements, selectedColor };
};
