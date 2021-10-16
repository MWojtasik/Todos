/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Colors } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import { selectableIcons } from '../consts/selectableIcons';
import { selectableColors } from '../consts/selectableColors';

interface List {
  name: string,
  remaindersCount?: number,
  id?: string,
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
      icon: selectableIcons[0],
      color: selectableColors[0],
    },
  },
  listsIds: ['0'],
} as AppState;

const appSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    createList(state, { payload: { name, icon, color } }: PayloadAction<List>) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      const id: string = uuidv4();

      state.listsIds.push(id);
      state.lists[id] = {
        name,
        remaindersCount: 0,
        id,
        icon,
        color,
      };
    },
  },
});

export const { createList } = appSlice.actions;
export default appSlice.reducer;
