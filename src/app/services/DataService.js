import { env } from '../../env'
const { REACT_APP_API_ENDPOINT } = env;

// *** baseURL & version control ****
const serverUri = '';//REACT_APP_API_ENDPOINT;
const BASE_URL = REACT_APP_API_ENDPOINT;

// *** headers ***
const lockHeader = {
  'Content-Type': 'application/json',
  // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
  "Access-Control-Allow-Origin": BASE_URL,
  "Access-Control-Allow-Credentials": true,
  // 'Content-Type': 'application/json',
  // // 'x-api-version': `${version}`,
  // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
};
const openHeader = {
  'Content-Type': 'application/json',
  // 'x-api-version': `${version}`,
};


// *** URIs ***

///////////////////////////////////////////////////
const GATEWAY_LOGIN = '/auth/login';
const GATEWAY_REGISTER = '/auth/register';
const GATEWAY_LOGOUT = '/auth/logout';
const GATEWAY_UPDATE_PASS = '/listing/updatePassword';
const GATEWAY_WITHDRAW = '/listing/withdraw';
const GATEWAY_DEPOSIT = '/listing/deposit';
const GATEWAY_REFERRAL = '/listing/referral';
const GATEWAY_TRANSACTION = '/listing/transaction';
const GATEWAY_RETURNINTEREST = '/listing/returninterest';

// eslint-disable-next-line camelcase
const axios_1 = require('axios');

function _postCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, //IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.post(url, data);
}

function _patchCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, //IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.patch(url, data);
}

function _postCustomWithoutContent(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: {
      // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
      "Access-Control-Allow-Origin": BASE_URL,
      "Access-Control-Allow-Credentials": true,
    },
  });
  return axiosCustom.post(url, data);
}

function _getCustom(url, data, isBuffer) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': isBuffer ? 'blob' : 'application/json',
      "Access-Control-Allow-Origin": BASE_URL,
      "Access-Control-Allow-Credentials": true,
    },
    withCredentials: true, //IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
    responseType: isBuffer ? "arraybuffer" : "json",
  });
  return axiosCustom.get(url, data);
}

function _postWithOutHeader(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: openHeader,
  });
  return axiosCustom.post(url, data);
}

function _putCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, //IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.put(url, data);
}

function _deleteCustom(url, data) {
  const axiosCustom = axios_1.default.create({
    baseURL: BASE_URL,
    headers: lockHeader,
    withCredentials: true, //IMPORTANT!!!! this is to set httpOnly cookie which contained jwt token for our scenario 
  });
  return axiosCustom.delete(url, data);
}

//////////////////////////////

function loginService(body) {

  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_LOGIN, body)
      .then((res) => {

        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function registerService(body) {
  return new Promise((resolve, reject) => {
    _postWithOutHeader(GATEWAY_REGISTER, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function logoutService() {
  return new Promise((resolve, reject) => {
    _getCustom(GATEWAY_LOGOUT)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function updatePassService(body) {
  return new Promise((resolve, reject) => {
    _patchCustom(GATEWAY_UPDATE_PASS, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function withdrawListService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_WITHDRAW + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function depositListService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_DEPOSIT + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function referralListService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_REFERRAL + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function transactionListService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_TRANSACTION + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function returnInterestListService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_RETURNINTEREST + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const dataServiceMethods = {
  updatePassService,
  loginService,
  registerService,
  logoutService,
  withdrawListService,
  depositListService,
  referralListService,
  transactionListService,
  returnInterestListService,
};

export default dataServiceMethods;
