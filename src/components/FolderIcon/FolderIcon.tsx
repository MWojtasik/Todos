import React from 'react';
import { Colors, Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const folderIconStyle = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: Colors.blue100,
  },
});

// TODO: ability to change icon/colors
export const FolderIcon = (): JSX.Element => {
  return (
    <Avatar.Icon
      icon="camera"
      style={folderIconStyle.container}
      color={Colors.blue700}
      size={45}
    />
  );
};
