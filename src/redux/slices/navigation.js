import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: 'PC',
  tag: null,
};

const slice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSelectedMenu(state, action) {
      state.menu = action.payload;
    },
    setSelectedTag(state, action) {
      state.tag = action.payload;
    },
  },
});

export const { setSelectedMenu, setSelectedTag } = slice.actions;
export default slice.reducer;
