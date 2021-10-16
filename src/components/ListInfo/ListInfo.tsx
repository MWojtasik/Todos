import React from 'react';
import { Title, Text } from 'react-native-paper';
import { View } from 'react-native';
import { listInfoStyles } from './ListInfoStyles';

interface ListInfoProps {
  name: string
  count?: number
}

export const ListInfo = ({ name, count = 0 }: ListInfoProps): JSX.Element => {
  return (
    <View style={listInfoStyles.container}>
      <Title>{name}</Title>
      <Text style={listInfoStyles.countText}>{`${count} tasks`}</Text>
    </View>
  );
};
