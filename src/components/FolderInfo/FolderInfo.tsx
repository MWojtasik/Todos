import React from 'react';
import { Title, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

interface FolderNameProps {
  name: string
  count: number
}

const folderInfoStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  countText: {
    fontWeight: '300',
  },
});

export const FolderInfo = ({ name, count }: FolderNameProps): JSX.Element => {
  return (
    <View style={folderInfoStyles.container}>
      <Title>{name}</Title>
      <Text style={folderInfoStyles.countText}>{`${count} tasks`}</Text>
    </View>
  );
};
