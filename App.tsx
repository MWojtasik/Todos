import React from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Folder } from './src/components/Folder/Folder';
import { TodosApp } from './src/components/TodosApp/TodosApp';

export default function App(): JSX.Element {
  return <TodosApp />;
}
