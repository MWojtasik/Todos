import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FolderIcon } from '../FolderIcon/FolderIcon';
import { FolderInfo } from '../FolderInfo/FolderInfo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '44%',
    height: 200,
    padding: 10,
    margin: '3%',
  },
});

export const Folder = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FolderIcon />
      <FolderInfo name="All" count={3} />
    </View>
  );
};
