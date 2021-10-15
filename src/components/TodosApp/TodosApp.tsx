import { SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Folder } from '../Folder/Folder';
import { todosAppStyles } from './TodosApp.styles';

export const TodosApp = (): JSX.Element => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={todosAppStyles.container}>
        <ScrollView style={todosAppStyles.scrollView}>
          <View style={todosAppStyles.folders}>
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
          </View>
        </ScrollView>
        <StatusBar style="dark" />
      </SafeAreaView>
    </PaperProvider>
  );
};
