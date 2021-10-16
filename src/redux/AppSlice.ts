/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Colors } from 'react-native-paper';

interface List {
  name: string,
  remaindersCount?: number,
  id: string,
  icon: string,
  color: string,
}

interface AppState {
  lists: Record<string, List>,
  listsIds: string[]
}

const initialState = {
  lists: {
    0: {
      name: 'All',
      remaindersCount: 0,
      id: '0',
      icon: 'camera',
      color: Colors.blue700,
    },
    1: {
      name: 'Home',
      remaindersCount: 3,
      id: '1',
      icon: 'camera',
      color: Colors.blue700,
    },
    2: {
      name: 'Work',
      remaindersCount: 7,
      id: '2',
      icon: 'camera',
      color: Colors.blue700,
    },
  },
  listsIds: ['0', '1', '2'],
} as AppState;

const appSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    createList(state, { payload: { name } }: PayloadAction<List>) {
      const id = 'daweaw332e3d';

      state.listsIds.push(id);
      state.lists[id] = {
        name,
        remaindersCount: 0,
        id: '23ed3',
        icon: 'camera',
        color: Colors.blue700,
      };
    },
  },
});

export const { createList } = appSlice.actions;
export default appSlice.reducer;
