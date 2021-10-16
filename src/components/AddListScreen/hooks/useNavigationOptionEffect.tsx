import { useDispatch } from 'react-redux';
import React, { useCallback, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createList } from '../../../redux/AppSlice';
import { LeftHeaderButton } from '../LeftHeaderButton/LeftHeaderButton';
import { RightHeaderButton } from '../RightHeaderButton/RightHeaderButton';

interface UseNavigationOptionsEffect {
  ({ listName, selectedColor, selectedIcon }: { listName: string, selectedColor: string, selectedIcon: string }): void
}

export const useNavigationOptionsEffect: UseNavigationOptionsEffect = ({ listName, selectedColor, selectedIcon }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addList = useCallback(() => {
    dispatch(createList({
      name: listName,
      color: selectedColor,
      icon: selectedIcon,
    }));
  }, [dispatch, listName, selectedColor, selectedIcon]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: LeftHeaderButton,
      headerRight: () => <RightHeaderButton onPress={addList} />,
    });
  }, [addList, navigation]);
};
