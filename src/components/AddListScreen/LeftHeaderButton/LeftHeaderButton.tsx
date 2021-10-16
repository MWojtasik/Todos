import { Button } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const LeftHeaderButton = (): JSX.Element => {
  const navigation = useNavigation();
  const onPress = () => navigation.goBack();

  return <Button onPress={onPress}>Back</Button>;
};
