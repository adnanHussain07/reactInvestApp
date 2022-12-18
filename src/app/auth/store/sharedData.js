import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showChangePass: false,
};

const sharedData = createSlice({
  name: 'auth/shared',
  initialState,
  reducers: {
    changeShowResetPass: (state, action) => {
      state.showChangePass = action.payload;
    },
    setSharedInitial: (state, action) => initialState,
  },
  extraReducers: {},
});

export const {
  changeShowResetPass,
  setSharedInitial,
} = sharedData.actions;

export default sharedData.reducer;
