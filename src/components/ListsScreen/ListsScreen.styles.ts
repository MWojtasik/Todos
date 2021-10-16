import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

export const listsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey200,
  },
  scrollView: {
    flex: 1,
  },
  folders: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'flex-start',
  },
});
