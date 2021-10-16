import React, { useMemo, useState } from 'react';
import { selectableIcons } from '../../../consts/selectableIcons';
import { SelectableIconButton } from '../../SelectableIconButton/SelectableIconButton';

interface UseSelectableIcons {
  (): { selectableIconsElements: JSX.Element[], selectedIcon:string }
}

export const useSelectableIcons: UseSelectableIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState(selectableIcons[0]);

  const selectableIconsElements = useMemo(() => selectableIcons.map((icon) => {
    return (
      <SelectableIconButton
        icon={icon}
        key={icon}
        selected={selectedIcon === icon}
        size={40}
        onPress={() => setSelectedIcon(icon)}
      />
    );
  }), [selectedIcon]);

  return { selectableIconsElements, selectedIcon };
};
