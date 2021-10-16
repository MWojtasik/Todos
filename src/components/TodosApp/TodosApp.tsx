import { StyleSheet, View } from 'react-native';
import React from 'react';
import {
  Button,
  Colors,
  DefaultTheme, Provider as PaperProvider, Text,
} from 'react-native-paper';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from '../../redux/store';
import { ListsScreen } from '../ListsScreen/ListsScreen';
import { Screens } from '../../consts/screenEnum';
import { AddListScreen } from '../AddListScreen/AddListScreen';

const Stack = createNativeStackNavigator();

function BlankScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export const TodosApp = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Screens.Lists}>
            <Stack.Screen name={Screens.Lists} component={ListsScreen} options={{ headerShown: false }} />
            <Stack.Screen name={Screens.Todos} component={BlankScreen} />
            <Stack.Screen
              name={Screens.AddList}
              component={AddListScreen}
              options={{
                title: 'Add List',
                presentation: 'modal',
                headerStyle: { backgroundColor: Colors.grey200 },
              }}
            />
            <Stack.Screen name={Screens.AddRemainder} component={BlankScreen} options={{ presentation: 'modal' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};
