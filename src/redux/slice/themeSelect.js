import { createSlice } from '@reduxjs/toolkit';

export const themeSelect = createSlice({
  name: 'themeSelect',
  initialState: {
    themeTitle: 'light'
  },
  reducers: {
    changeTheme: (state, _action) => {
      state.themeTitle = state.themeTitle === 'light' ? 'dark' : 'light';
    },
  },
});

export const {
  changeTheme,
 } = themeSelect.actions;

export default themeSelect.reducer;
