import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // logsPagination: {
  //   pageNo: 1,
  //   pageSize: 10,
  // },
  // logsTotalCount: 0,
};

const sharedData = createSlice({
  name: 'auth/shared',
  initialState,
  reducers: {
    // changeItemStatus: (state, action) => {
    //   state.itemStatus = action.payload;
    // },
    setSharedInitial: (state, action) => initialState,
  },
  extraReducers: {},
});

export const {
  setSharedInitial,
} = sharedData.actions;

export default sharedData.reducer;
