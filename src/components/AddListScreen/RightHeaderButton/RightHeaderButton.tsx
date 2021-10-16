import { Button } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface RightHeaderButtonProps {
  onPress: () => void
}

export const RightHeaderButton = ({ onPress }: RightHeaderButtonProps): JSX.Element => {
  const navigation = useNavigation();

  const onPressFinal = () => {
    onPress();
    navigation.goBack();
  };

  return <Button onPress={onPressFinal}>Ok</Button>;
};
