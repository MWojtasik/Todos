import { StyleSheet } from 'react-native';

export const todosAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eae6e6',
  },
  scrollView: {
    flex: 1,
  },
  folders: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-around',
  },
});
