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

  roiPagination: {
    pageNo: 1,
    pageSize: 10,
  },
  roiTotalCount: 0,
  roiData: [],

  transactionPagination: {
    pageNo: 1,
    pageSize: 10,
  },
  transactionTotalCount: 0,
  transactionData: [],

  dashboardData: [],
  showJoinPlan: false,
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

    setROIPagination: (state, action) => {
      state.roiPagination = action.payload;
    },
    setROITotalCount: (state, action) => {
      state.roiTotalCount = action.payload;
    },
    setROIData: (state, action) => {
      state.roiData = action.payload;
    },

    setTransactionPagination: (state, action) => {
      state.transactionPagination = action.payload;
    },
    setTransactionTotalCount: (state, action) => {
      state.transactionTotalCount = action.payload;
    },
    setTransactionData: (state, action) => {
      state.transactionData = action.payload;
    },

    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
    setShowJoinPlan: (state, action) => {
      state.showJoinPlan = action.payload;
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
  setShowJoinPlan,

  setROIPagination,
  setROITotalCount,
  setROIData,

  setTransactionPagination,
  setTransactionTotalCount,
  setTransactionData,

  setSharedInitial,
} = sharedData.actions;

export default sharedData.reducer;
