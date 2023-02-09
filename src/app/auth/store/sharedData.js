import { createSlice } from '@reduxjs/toolkit';
import { DEFAULTUSERPIC } from './constants';

const initialState = {
  showChangePass: false,
  userFirstName: '',
  userLastName: '',
  userEmail: '',
  userImage: DEFAULTUSERPIC,
  isTwoFAEnable: false,
  showTwoFA: false,
  showDepositNow: false,
  showWithdrawNow: false,
  loggedin: false,
  depositApprovePagination: {
    pageNo: 1,
    pageSize: 10,
  },
  withdrawApprovePagination: {
    pageNo: 1,
    pageSize: 10,
  },
  depositApproveTotalCount: 0,
  withdrawApproveTotalCount: 0,
  depositApproveData: [],
  withdrawApproveData: [],

  dashboardData: [],
};

const sharedData = createSlice({
  name: 'auth/shared',
  initialState,
  reducers: {
    changeShowResetPass: (state, action) => {
      state.showChangePass = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.userFirstName = action.payload;
    },
    setUserLastName: (state, action) => {
      state.userLastName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserImage: (state, action) => {
      state.userImage = action.payload;
    },
    setShowTwoFA: (state, action) => {
      state.showTwoFA = action.payload;
    },
    setTwoFAEnable: (state, action) => {
      state.isTwoFAEnable = action.payload;
    },
    setShowDeposit: (state, action) => {
      state.showDepositNow = action.payload;
    },
    setShowWithdraw: (state, action) => {
      state.showWithdrawNow = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedin = action.payload;
    },

    setDepositApprovePagination: (state, action) => {
      state.depositApprovePagination = action.payload;
    },
    setDepositApproveTotalCount: (state, action) => {
      state.depositApproveTotalCount = action.payload;
    },
    setDepositApproveData: (state, action) => {
      state.depositApproveData = action.payload;
    },

    setWithdrawApprovePagination: (state, action) => {
      state.withdrawApprovePagination = action.payload;
    },
    setWithdrawApproveTotalCount: (state, action) => {
      state.withdrawApproveTotalCount = action.payload;
    },
    setWithdrawApproveData: (state, action) => {
      state.withdrawApproveData = action.payload;
    },

    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },

    setSharedInitial: (state, action) => initialState,
  },
  extraReducers: {},
});

export const {
  changeShowResetPass,
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserImage,
  setShowTwoFA,
  setShowDeposit,
  setTwoFAEnable,
  setShowWithdraw,
  setLoggedIn,

  setDepositApprovePagination,
  setDepositApproveTotalCount,
  setDepositApproveData,

  setWithdrawApprovePagination,
  setWithdrawApproveTotalCount,
  setWithdrawApproveData,

  setDashboardData,

  setSharedInitial,
} = sharedData.actions;

export default sharedData.reducer;
