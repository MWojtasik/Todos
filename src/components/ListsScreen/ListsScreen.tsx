import {
  SafeAreaView, ScrollView, StyleSheet, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListsCards } from '../ListsCards/ListsCards';
import { listsScreenStyles } from './ListsScreen.styles';
import { Screens } from '../../consts/screenEnum';

export const buttonsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    fontSize: 20,
  },
});

export const ListsScreen = (): JSX.Element => {
  const navigation = useNavigation();
  // @ts-ignore
  const navigateToAddFolderScreen = () => navigation.navigate(Screens.AddList);
  // @ts-ignore
  const navigateToAddTodoItemScreen = () => navigation.navigate(Screens.AddRemainder);

  return (
    <SafeAreaView style={listsScreenStyles.container}>
      <ScrollView style={listsScreenStyles.scrollView}>
        <View style={listsScreenStyles.folders}><ListsCards /></View>
      </ScrollView>
      <View style={buttonsStyles.container}>
        <Button icon="plus-circle" onPress={navigateToAddTodoItemScreen}>
          Add remainder
        </Button>
        <Button mode="contained" onPress={navigateToAddFolderScreen}>
          Add list
        </Button>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
