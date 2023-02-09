import ds from 'app/services/DataService';
import { setInitialSettings } from 'app/store/fuse/settingsSlice';
import {
  setLoadersInitial,
  setDepositLoader,
  setApproveDepositLoader,
  setApproveWithdrawLoader,
  setDashboardLoader,
} from 'app/auth/store/loadersSlice';
import {
  setSharedInitial,
  setDepositApproveTotalCount,
  setDepositApproveData,
  setWithdrawApproveTotalCount,
  setWithdrawApproveData,
  setDashboardData,
  setDepositApprovePagination,
} from 'app/auth/store/sharedData';
import history from '@history';
import fs from 'fs';
import { displayPopup, isString, randomString, sessionExpired } from './commonMethods';

export const logoutServiceProvider = () => async (dispatch) => {
  return ds
    .logoutService()
    .then(res => {
      localStorage.setItem('loggedout', '1');
      dispatch(setLoadersInitial());
      dispatch(setSharedInitial());
      dispatch(setInitialSettings());
      history.push({
        pathname: '/venapp/home',
      });
      // window.location.reload();
      console.log("LOGOUT_DONE");
    })
    .catch(e => {
      localStorage.setItem('loggedout', '1');
      dispatch(setLoadersInitial());
      dispatch(setSharedInitial());
      dispatch(setInitialSettings());
      history.push({
        pathname: '/venapp/home',
      });
    });
};

export const postDeposit = (body) => async (dispatch) => {
  dispatch(setDepositLoader(true));
  return ds
    .postDepositService(body)
    .then(res => {
      dispatch(setDepositLoader(false));
      if (res.error) {
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      }
      else if (res && res.code && res.code == 200) {
        dispatch(displayPopup(res.msg ? res.msg : "Successfully deposited", 'success', 4000));
      }
      else {
        dispatch(displayPopup('Try again Later', 'warning', 2000));
      }
    })
    .catch(e => {
      dispatch(setDepositLoader(false));
      if (e && e.response && e.response.status == 401) {
        if (e.response.data == 'Authentication Invalid') dispatch(sessionExpired());
      }
      else {
        const msg = e && e.response && e.response.data
          && isString(e.response.data) ? e.response.data :
          e && e.response && e.response.data && e.response.data.data && isString(e.response.data.data) ? e.response.data.data
            : "Something Went Wrong";
        dispatch(displayPopup(msg ? msg : "Something Went Wrong", 'error', 2000));
      };
    });
};

export const getApproveDepositList = (body) => async (dispatch) => {
  dispatch(setApproveDepositLoader(true));
  return ds
    .depositApproveListService(body)
    .then(res => {
      dispatch(setApproveDepositLoader(false));
      if (res.error) {
        if (res.code === 401) {
          dispatch(setDepositApproveTotalCount(0));
          dispatch(setDepositApproveData([]));
          dispatch(setApproveDepositLoader(false));
        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setDepositApproveTotalCount(res.totalCount));
        } else dispatch(setDepositApproveTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setDepositApproveData(res.data));
        } else {
          dispatch(setDepositApproveData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setDepositApproveTotalCount(0));
      dispatch(setDepositApproveData([]));
      dispatch(setApproveDepositLoader(false));
      if (e && e.response && e.response.status == 401) {
        if (e.response.data == 'Authentication Invalid') dispatch(sessionExpired())
      }
      else {
        const msg = e && e.response && e.response.data
          && isString(e.response.data) ? e.response.data :
          e && e.response && e.response.data && e.response.data.data && isString(e.response.data.data) ? e.response.data.data
            : "Something Went Wrong";
        dispatch(displayPopup(msg ? msg : "Something Went Wrong", 'error', 2000));
      };
    });
};

export const getApproveWithdrawList = (body) => async (dispatch) => {
  dispatch(setApproveWithdrawLoader(true));
  return ds
    .withApproveListService(body)
    .then(res => {
      dispatch(setApproveWithdrawLoader(false));
      if (res.error) {
        if (res.code === 401) {
          dispatch(setWithdrawApproveTotalCount(0));
          dispatch(setWithdrawApproveData([]));
          dispatch(setApproveWithdrawLoader(false));
        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setWithdrawApproveTotalCount(res.totalCount));
        } else dispatch(setWithdrawApproveTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setWithdrawApproveData(res.data));
        } else {
          dispatch(setWithdrawApproveData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setWithdrawApproveTotalCount(0));
      dispatch(setWithdrawApproveData([]));
      dispatch(setApproveWithdrawLoader(false));
      if (e && e.response && e.response.status == 401) {
        if (e.response.data == 'Authentication Invalid') dispatch(sessionExpired())
      }
      else {
        const msg = e && e.response && e.response.data
          && isString(e.response.data) ? e.response.data :
          e && e.response && e.response.data && e.response.data.data && isString(e.response.data.data) ? e.response.data.data
            : "Something Went Wrong";
        dispatch(displayPopup(msg ? msg : "Something Went Wrong", 'error', 2000));
      };
    });
};

export const getDashboard = (body) => async (dispatch) => {
  
  dispatch(setDashboardLoader(true));
  return ds
    .dashboardService(body)
    .then(res => {
      dispatch(setDashboardLoader(false));
      if (res.error) {
        if (res.code === 401) {
          dispatch(setDashboardData([]));
        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res && res.code == 200) {
          dispatch(setDashboardData(res.data));
        } else {
          dispatch(setDashboardData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setDashboardData([]));
      dispatch(setDashboardLoader(false));
      if (e && e.response && e.response.status == 401) {
        if (e.response.data == 'Authentication Invalid') dispatch(sessionExpired())
      }
      else {
        const msg = e && e.response && e.response.data
          && isString(e.response.data) ? e.response.data :
          e && e.response && e.response.data && e.response.data.data && isString(e.response.data.data) ? e.response.data.data
            : "Something Went Wrong";
        dispatch(displayPopup(msg ? msg : "Something Went Wrong", 'error', 2000));
      };
    });
};

export const postApproveDeposit = (body, pagination) => async (dispatch) => {
  dispatch(setApproveDepositLoader(true));
  return ds
    .postApproveDeposit(body)
    .then(res => {
      dispatch(setApproveDepositLoader(false));
      if (res.error) {
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      }
      else if (res && res.code && res.code == 200) {
        dispatch(displayPopup(res.msg ? res.msg : "Successfully approved", 'success', 4000));
        const bodys = {
          changeOccur: randomString(),
          pageNo: pagination.pageNo,
          pageSize: pagination.pageSize,
        }
        dispatch(setDepositApprovePagination(bodys));
      }
      else {
        dispatch(displayPopup('Try again Later', 'warning', 2000));
      }
    })
    .catch(e => {
      dispatch(setApproveDepositLoader(false));
      if (e && e.response && e.response.status == 401) {
        if (e.response.data == 'Authentication Invalid') dispatch(sessionExpired())
      }
      else {
        const msg = e && e.response && e.response.data
          && isString(e.response.data) ? e.response.data :
          e && e.response && e.response.data && e.response.data.data && isString(e.response.data.data) ? e.response.data.data
            : "Something Went Wrong";
        dispatch(displayPopup(msg ? msg : "Something Went Wrong", 'error', 2000));
      };
    });
};