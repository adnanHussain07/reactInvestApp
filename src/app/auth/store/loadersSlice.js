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
  twoFALoader: false,
  depositLoader: false, //true
  withdrawLoader: false, //true
  withdrawApproveLoader: false, //true
  depositApproveLoader: false, //true
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
    setTwoFALoader: (state, action) => {
      state.twoFALoader = action.payload;
    },
    setDepositLoader: (state, action) => {
      state.depositLoader = action.payload;
    },
    setWithdrawLoader: (state, action) => {
      state.withdrawLoader = action.payload;
    },
    setApproveDepositLoader: (state, action) => {
      state.depositApproveLoader = action.payload;
    },
    setApproveWithdrawLoader: (state, action) => {
      state.withdrawApproveLoader = action.payload;
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
  setNotifyLoader,
  setSendNotifyLoader,
  setRegisterLoader,
  setAddUserLoader,
  setLogsLoader,
  setUsersListLoader,
  setDepositLoader,
  setTwoFALoader,
  setWithdrawLoader,
  setApproveDepositLoader,
  setApproveWithdrawLoader,

  setLoadersInitial,
} = invitesSlice.actions;

export default invitesSlice.reducer;
