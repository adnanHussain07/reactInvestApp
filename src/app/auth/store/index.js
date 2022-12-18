import { combineReducers } from '@reduxjs/toolkit';
import login from './loginSlice';
import register from './registerSlice';
import user from './userSlice';
import sharedData from './sharedData';
import loaders from './loadersSlice';

const authReducers = combineReducers({
  sharedData,
  loaders,
  user,
  login,
  register,
});

export default authReducers;
