import { env } from '../../env'
const { REACT_APP_API_ENDPOINT } = env;

import { weekData } from 'app/auth/store/nflServices';

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
const GATEWAY_CREATEUSER = '/user/create';
const GATEWAY_GETREGUSER = '/auth/showregisterusers';
const GATEWAY_CREATEITEM = '/item/create';
const GATEWAY_GETITEM = '/static';
const GATEWAY_LOGS = '/logs';
const GATEWAY_GETTING = '/getting';
const GATEWAY_RENTING = '/renting';
const GATEWAY_MAINTAINACE = '/maintenance';
const GATEWAY_DASHBAORD = '/dashboard';
const GATEWAY_SPREADSHEET = '/spreadsheet';

///////////////////////////////////////////////////
const GATEWAY_GETUYSERS = '/users';
const GATEWAY_GETULEAGUES = '/league';
const GATEWAY_GETMYLEAGUE = '/myleague';
const GATEWAY_GETPLAYERS = '/players';
const GATEWAY_GETLEAGUEPLAYERS = '/league/players';
const GATEWAY_LOGIN = '/auth/login';
const GATEWAY_REGISTER = '/auth/register';
const GATEWAY_LOGOUT = '/auth/logout';
const GATEWAY_UPDATE_USER = '/updateuser';
const GATEWAY_SPEC_USER = '/specuser';
const GATEWAY_SPEC_CREATE_LEAGUE = '/league/create';
const GATEWAY_SPEC_JOIN_LEAGUE = '/league/join';
const GATEWAY_DELETE = '/deletezomb';
const GATEWAY_ALL_TEAMS = '/league/teams';
const GATEWAY_TEAM_PICK = '/userpick/choosepick';
const GATEWAY_TEAM_GET_PICK = '/userpick/getuserpick';
const GATEWAY_GET_DASHBOARD = '/userpick/dashboard';
const GATEWAY_GET_STATSCHECK = '/userpick/statscheck';
const GATEWAY_POST_STATSSERVICE = '/userpick/servicestats';
const GATEWAY_GET_JOIN_LEAGUE = '/league/joinedleagues';
const GATEWAY_POST_PICK_STATS = '/userpick/updatepickstats';

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

function addUserService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_CREATEUSER, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function addItemService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_CREATEITEM, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getAllProductsService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GETITEM + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getAllLogsService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_LOGS + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getAllUsersService(body, isReg) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(isReg ? `${GATEWAY_GETREGUSER + queryString}` : `${GATEWAY_CREATEUSER + queryString}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteItemService(body) {
  return new Promise((resolve, reject) => {
    _deleteCustom(GATEWAY_CREATEITEM + "/" + body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteUserService(body) {
  return new Promise((resolve, reject) => {
    _deleteCustom(GATEWAY_CREATEUSER + "/" + body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteRegisterService(body) {
  return new Promise((resolve, reject) => {
    _deleteCustom(GATEWAY_GETREGUSER + "/" + body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function changeStatusMaintainService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_GETTING, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function changeStatusService(body, type) {
  return new Promise((resolve, reject) => {
    _postCustom(type == 'rent' ? GATEWAY_RENTING :
      type == 'avail' ? GATEWAY_GETTING :
        type == 'maint' ? GATEWAY_MAINTAINACE : '', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function dashboardService() {
  return new Promise((resolve, reject) => {
    _getCustom(GATEWAY_DASHBAORD)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function spreadSheetService(body) {
  return new Promise((resolve, reject) => {
    const SerialNo = body.SerialNo ? `&SerialNo=${body.SerialNo}` : "";
    const status = body.status ? `&status=${body.status}` : "";
    const present_storenumber = body.present_storenumber ? `&present_storenumber=${body.present_storenumber}` : "";
    const rentee = body.rentee ? `&rentee=${body.rentee}` : "";
    const name = body.name ? `&name=${body.name}` : "";
    const itemid = body.itemid ? `&itemid=${body.itemid}` : "";
    const rentee_id = body.rentee_id ? `&rentee_id=${body.rentee_id}` : "";
    const type = `?type=${body.type ? body.type : "items"}${SerialNo + status + present_storenumber + rentee + name + itemid + rentee_id}`;
    _getCustom(GATEWAY_SPREADSHEET + type, false, true)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// function nflServiceScoreboard() {
//   return new Promise((resolve, reject) => {
//     axios_1.get('https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl')
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

////////////////////////////////////////////////////

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

function nflWeekService(week) {
  return new Promise((resolve, reject) => {
    axios_1.get(weekData.replace('{0}', week))
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function nflDynamicService(url) {
  return new Promise((resolve, reject) => {
    axios_1.get(url)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getUsersDBService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GETUYSERS + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getLeaguesDBService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GETULEAGUES + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getMyLeaguesDBService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GETMYLEAGUE + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getPlayersDBService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GETPLAYERS + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getleaguePlayersDBService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GETLEAGUEPLAYERS + "/" + queryString)
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

function getSpecUserService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_SPEC_USER + "/" + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function updateUserService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_UPDATE_USER, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function createLeagueService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_SPEC_CREATE_LEAGUE, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function joinLeagueService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_SPEC_JOIN_LEAGUE, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deleteService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_DELETE, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getAllTeamsDBService(body) {
  return new Promise((resolve, reject) => {
    axios_1.default.create({
      baseURL: BASE_URL,
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('userguid')}`,
        "Access-Control-Allow-Origin": BASE_URL,
        "Access-Control-Allow-Credentials": true,
      },
    }).get(GATEWAY_ALL_TEAMS, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function choosePickService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_TEAM_PICK, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getPickService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_TEAM_GET_PICK + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getDashboardScoreboard(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GET_DASHBOARD + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getStatsService(body) {
  return new Promise((resolve, reject) => {
    const queryString = `?season=${body.year}&type=${body.type}&week=${body.weekno}`;
    _getCustom(GATEWAY_GET_STATSCHECK + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function postStatsService(body) {
  return new Promise((resolve, reject) => {
    _postCustom(GATEWAY_POST_STATSSERVICE, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getJoinLeaguesDBService(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _getCustom(GATEWAY_GET_JOIN_LEAGUE + queryString)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function postPickStats(body) {
  return new Promise((resolve, reject) => {
    const queryString = body ? body : "";
    _postCustom(GATEWAY_POST_PICK_STATS)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const dataServiceMethods = {
  getAllProductsService,
  addUserService,
  addItemService,
  getAllLogsService,
  getAllUsersService,
  deleteItemService,
  deleteUserService,
  deleteRegisterService,
  changeStatusService,
  dashboardService,
  spreadSheetService,

  // nflServiceScoreboard,
  nflDynamicService,
  nflWeekService,
  getUsersDBService,
  getLeaguesDBService,
  getMyLeaguesDBService,
  getPlayersDBService,
  getleaguePlayersDBService,
  updatePassService,
  loginService,
  registerService,
  logoutService,
  getSpecUserService,
  updateUserService,
  createLeagueService,
  joinLeagueService,
  deleteService,
  getAllTeamsDBService,
  choosePickService,
  getPickService,
  getDashboardScoreboard,
  getStatsService,
  postStatsService,
  getJoinLeaguesDBService,
  postPickStats,
};

export default dataServiceMethods;
