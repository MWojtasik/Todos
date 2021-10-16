import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native-paper';
import { ListIcon } from '../ListIcon/ListIcon';
import { ColorButton, IconButton } from '../ColorButton/ColorButton';
import { selectableIcons } from '../../consts/selectableIcons';
import { selectableColors } from '../../consts/selectableColors';

export const addListScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey200,
    flexDirection: 'column',
  },
  nestedContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  colorPickup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textInput: {
    width: '90%',
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.grey100,
  },
});

export const AddListScreen = (): JSX.Element => {
  const [listName, setListName] = useState('');
  const [selectedColor, setSelectedColor] = useState(selectableColors[0]);
  const [selectedIcon, setSelectedIcon] = useState(selectableIcons[0]);

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
        {selectableColors.map((color) => {
          return (
            <ColorButton
              key={color}
              selected={selectedColor === color}
              color={color}
              size={40}
              onPress={() => setSelectedColor(color)}
            />
          );
        })}
      </View>

      <View style={{ ...addListScreenStyles.nestedContainer, ...addListScreenStyles.colorPickup }}>
        {selectableIcons.map((icon) => {
          return (
            <IconButton
              icon={icon}
              key={icon}
              selected={selectedIcon === icon}
              size={40}
              onPress={() => setSelectedIcon(icon)}
            />
          );
        })}
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
};
