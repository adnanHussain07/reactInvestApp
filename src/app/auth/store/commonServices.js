import ds from 'app/services/DataService';
import { setInitialSettings } from 'app/store/fuse/settingsSlice';
import { setLoadersInitial } from 'app/auth/store/loadersSlice';
import { setSharedInitial } from 'app/auth/store/sharedData';
import history from '@history';
import fs from 'fs';
// import { displayPopup, isString, randomString, sessionExpired } from './commonMethods';

export const logoutServiceProvider = () => async (dispatch) => {
  return ds
    .logoutService()
    .then(res => {
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
      dispatch(setLoadersInitial());
      dispatch(setSharedInitial());
      dispatch(setInitialSettings());
      history.push({
        pathname: '/venapp/home',
      });
    });
};

