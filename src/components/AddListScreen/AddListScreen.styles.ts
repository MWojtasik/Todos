import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

export const addListScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey200,
    flexDirection: 'column',
  },
  nestedContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  colorPickup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textInput: {
    width: '90%',
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.grey100,
  },
});
