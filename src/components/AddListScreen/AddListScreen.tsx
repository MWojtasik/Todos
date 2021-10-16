import React, { useState } from 'react';
import {
  View, TextInput, ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListIcon } from '../ListIcon/ListIcon';
import { addListScreenStyles } from './AddListScreen.styles';
import { useSelectableColors } from './hooks/useSelectableColors';
import { useSelectableIcons } from './hooks/useSelectableIcons';
import { useNavigationOptionsEffect } from './hooks/useNavigationOptionEffect';

export const AddListScreen = (): JSX.Element => {
  const [listName, setListName] = useState('');
  const { selectedColor, selectableColorsElements } = useSelectableColors();
  const { selectedIcon, selectableIconsElements } = useSelectableIcons();

  useNavigationOptionsEffect({ listName, selectedIcon, selectedColor });

  return (
    <ScrollView style={addListScreenStyles.container}>
      <View style={addListScreenStyles.nestedContainer}>
        <ListIcon
          size={80}
          icon={selectedIcon}
          color={selectedColor}
        />
        <TextInput
          style={addListScreenStyles.textInput}
          onChangeText={(value) => setListName(value)}
          value={listName}
          placeholder="List name"
        />
      </View>

      <View style={{ ...addListScreenStyles.nestedContainer, ...addListScreenStyles.colorPickup }}>
        {selectableColorsElements}
      </View>

      <View style={{ ...addListScreenStyles.nestedContainer, ...addListScreenStyles.colorPickup }}>
        {selectableIconsElements}
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
};
