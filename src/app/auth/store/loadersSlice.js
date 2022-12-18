import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginLoader: false,
  createProfileLoader: true,
  dashboardLoader: true,
  accessLoader: true,
  authLoader: false,
  usersLoader: true,
  notifyLoader: true,
  sendNotifyLoader: false,
  registerLoader: false,
  addUserLoader: false,
  logsLoader: false,
  usersListLoader: false,
};

const invitesSlice = createSlice({
  name: 'auth/loaders',
  initialState,
  reducers: {
    setLoginLoader: (state, action) => {
      state.loginLoader = action.payload;
    },
    setProfileLoader: (state, action) => {
      state.createProfileLoader = action.payload;
    },
    setDashboardLoader: (state, action) => {
      state.dashboardLoader = action.payload;
    },
    setAccessLoader: (state, action) => {
      state.accessLoader = action.payload;
    },
    setAuthLoader: (state, action) => {
      state.authLoader = action.payload;
    },
    setUsersLoader: (state, action) => {
      state.usersLoader = action.payload;
    },
    setNotifyLoader: (state, action) => {
      state.notifyLoader = action.payload;
    },
    setSendNotifyLoader: (state, action) => {
      state.sendNotifyLoader = action.payload;
    },
    //////////old
    setRegisterLoader: (state, action) => {
      state.registerLoader = action.payload;
    },
    setAddUserLoader: (state, action) => {
      state.addUserLoader = action.payload;
    },
    setLogsLoader: (state, action) => {
      state.logsLoader = action.payload;
    },
    setUsersListLoader: (state, action) => {
      state.usersListLoader = action.payload;
    },
    setLoadersInitial: (state, action) => initialState,
  },
  extraReducers: {},
});

export const {
  setLoginLoader,
  setProfileLoader,
  setDashboardLoader,
  setAccessLoader,
  setAuthLoader,
  setUsersLoader,
  setLoadersInitial,
  setNotifyLoader,
  setSendNotifyLoader,
  setRegisterLoader,
  setAddUserLoader,
  setLogsLoader,
  setUsersListLoader,
} = invitesSlice.actions;

export default invitesSlice.reducer;
