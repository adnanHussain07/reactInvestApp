import ds from 'app/services/DataService';
import { setInitialSettings } from 'app/store/fuse/settingsSlice';
import history from '@history';
import fs from 'fs';
import { setDashboardLoader, setLeaguePlayersLoader, setLeaguesLoader, setLoadersInitial, setMyLeaguesLoader, setPlayersLoader, setUpdateStatsLoader, setUsersLoader } from './loadersSlice';
import { displayPopup, isString, randomString, sessionExpired } from './commonMethods';
import { setDashboardData, setDashboardTotalCount, setDashLeagueData, setLeaguePlayersData, setLeaguePlayersPagination, setLeaguePlayersTotalCount, setLeaguesData, setLeaguesTotalCount, setMyLeaguesData, setMyLeaguesPagination, setMyLeaguesTotalCount, setPlayersData, setPlayersPagination, setPlayersTotalCount, setSharedInitial, setTeamsData, setUsersData, setUsersPagination, setUsersTotalCount } from './sharedData';
import { callForward, getWeekAllEvents } from './nflServices';

export const logoutServiceProvider = () => async (dispatch) => {
  return ds
    .logoutService()
    .then(res => {

      dispatch(setLoadersInitial());
      dispatch(setSharedInitial());
      dispatch(setInitialSettings());
      // history.push({
      //   pathname: '/login',
      // });
      window.location.reload();
      console.log("LOGOUT_DONE");
    })
    .catch(e => {
      dispatch(setInitialSettings());
      history.push({
        pathname: '/login',
      });
    });
};

export const getUsersService = (body) => async (dispatch) => {
  dispatch(setUsersLoader(true));
  return ds
    .getUsersDBService(body)
    .then(res => {
      dispatch(setUsersLoader(false));
      if (res.error) {
        dispatch(setUsersTotalCount(0));
        dispatch(setUsersData([]));
        dispatch(setUsersLoader(false));
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setUsersTotalCount(res.totalCount));
        } else dispatch(setUsersTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setUsersData(res.data));
        } else {
          dispatch(setUsersData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setUsersTotalCount(0));
      dispatch(setUsersData([]));
      dispatch(setUsersLoader(false));
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

export const getLeaguesService = (body) => async (dispatch) => {
  dispatch(setLeaguesLoader(true));
  return ds
    .getLeaguesDBService(body)
    .then(res => {
      dispatch(setLeaguesLoader(false));
      if (res.error) {
        dispatch(setLeaguesTotalCount(0));
        dispatch(setLeaguesData([]));
        dispatch(setLeaguesLoader(false));
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setLeaguesTotalCount(res.totalCount));
        } else dispatch(setLeaguesTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setLeaguesData(res.data));
        } else {
          dispatch(setLeaguesData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setLeaguesTotalCount(0));
      dispatch(setLeaguesData([]));
      dispatch(setLeaguesLoader(false));
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

export const getMyLeaguesService = (body) => async (dispatch) => {
  dispatch(setMyLeaguesLoader(true));
  return ds
    .getMyLeaguesDBService(body)
    .then(res => {
      dispatch(setMyLeaguesLoader(false));
      if (res.error) {
        dispatch(setMyLeaguesTotalCount(0));
        dispatch(setMyLeaguesData([]));
        dispatch(setMyLeaguesLoader(false));
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setMyLeaguesTotalCount(res.totalCount));
        } else dispatch(setMyLeaguesTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setDashLeagueData(res.data));
          dispatch(setMyLeaguesData(res.data));
        } else {
          dispatch(setDashLeagueData([]));
          dispatch(setMyLeaguesData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setDashLeagueData([]));
      dispatch(setMyLeaguesTotalCount(0));
      dispatch(setMyLeaguesData([]));
      dispatch(setMyLeaguesLoader(false));
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

export const getPlayersService = (body) => async (dispatch) => {
  dispatch(setPlayersLoader(true));
  return ds
    .getPlayersDBService(body)
    .then(res => {
      dispatch(setPlayersLoader(false));
      if (res.error) {
        if (res.code === 401) {
          dispatch(setPlayersTotalCount(0));
          dispatch(setPlayersData([]));
          dispatch(setPlayersLoader(false));
        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setPlayersTotalCount(res.totalCount));
        } else dispatch(setPlayersTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setPlayersData(res.data));
        } else {
          dispatch(setPlayersData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setPlayersTotalCount(0));
      dispatch(setPlayersData([]));
      dispatch(setPlayersLoader(false));
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

export const getLeaguePlayersService = (body) => async (dispatch) => {
  dispatch(setLeaguePlayersLoader(true));
  return ds
    .getleaguePlayersDBService(body)
    .then(res => {
      dispatch(setLeaguePlayersLoader(false));
      if (res.error) {
        dispatch(setLeaguePlayersTotalCount(0));
        dispatch(setLeaguePlayersData([]));
        dispatch(setLeaguePlayersLoader(false));
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setLeaguePlayersTotalCount(res.totalCount));
        } else dispatch(setLeaguePlayersTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setLeaguePlayersData(res.data));
        } else {
          dispatch(setLeaguePlayersData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setLeaguePlayersTotalCount(0));
      dispatch(setLeaguePlayersData([]));
      dispatch(setLeaguePlayersLoader(false));
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

export const deletePlayer = (body, pagination) => async (dispatch) => {
  dispatch(setPlayersLoader(true));
  return ds
    .deleteService(body)
    .then(res => {
      dispatch(setPlayersLoader(false));
      if (res.error) {
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      }
      else if (res && res.code && res.code == 200) {
        const bodys = {
          changeOccur: randomString(),
          pageNo: pagination.pageNo,
          pageSize: pagination.pageSize,
        }
        dispatch(setPlayersPagination(bodys));
        dispatch(displayPopup(res.msg ? res.msg : "Player has been deleted", 'success', 3000));
      }
      else {
        dispatch(displayPopup('Try again Later', 'warning', 2000));
      }
    })
    .catch(e => {
      dispatch(setPlayersLoader(false));
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

export const deleteUser = (body, pagination) => async (dispatch) => {
  dispatch(setUsersLoader(true));
  return ds
    .deleteService(body)
    .then(res => {
      dispatch(setUsersLoader(false));
      if (res.error) {
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      }
      else if (res && res.code && res.code == 200) {
        const bodys = {
          changeOccur: randomString(),
          pageNo: pagination.pageNo,
          pageSize: pagination.pageSize,
        }
        dispatch(setUsersPagination(bodys));
        dispatch(displayPopup(res.msg ? res.msg : "Management User has been deleted", 'success', 3000));
      }
      else {
        dispatch(displayPopup('Try again Later', 'warning', 2000));
      }
    })
    .catch(e => {
      dispatch(setUsersLoader(false));
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

export const deleteMyLeague = (body, pagination) => async (dispatch) => {
  dispatch(setMyLeaguesLoader(true));
  return ds
    .deleteService(body)
    .then(res => {
      dispatch(setMyLeaguesLoader(false));
      if (res.error) {
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      }
      else if (res && res.code && res.code == 200) {
        const bodys = {
          changeOccur: randomString(),
          pageNo: pagination.pageNo,
          pageSize: pagination.pageSize,
        }
        dispatch(setMyLeaguesPagination(bodys));
        dispatch(displayPopup(res.msg ? res.msg : "League has been deleted", 'success', 3000));
      }
      else {
        dispatch(displayPopup('Try again Later', 'warning', 2000));
      }
    })
    .catch(e => {
      dispatch(setMyLeaguesLoader(false));
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

export const deleteLeaguePlayer = (body, pagination) => async (dispatch) => {
  dispatch(setLeaguePlayersLoader(true));
  return ds
    .deleteService(body)
    .then(res => {
      dispatch(setLeaguePlayersLoader(false));
      if (res.error) {
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      }
      else if (res && res.code && res.code == 200) {
        const bodys = {
          changeOccur: randomString(),
          pageNo: pagination.pageNo,
          pageSize: pagination.pageSize,
        }
        dispatch(setLeaguePlayersPagination(bodys));
        dispatch(displayPopup(res.msg ? res.msg : "League Player has been deleted", 'success', 3000));
      }
      else {
        dispatch(displayPopup('Try again Later', 'warning', 2000));
      }
    })
    .catch(e => {
      dispatch(setLeaguePlayersLoader(false));
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

export const getAllTeamsService = (body) => async (dispatch) => {
  return ds
    .getAllTeamsDBService(body)
    .then(res => {
      if (res && res.code && res.code == 200) {
        if (res.data && res.data.length > 0) {
          localStorage.setItem('teams_Data', JSON.stringify(res.data));
          dispatch(setTeamsData(res.data ? res.data : []));
        }
      }
    })
    .catch(e => {
      dispatch(setLeaguePlayersLoader(false));
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

export const getDashScoreboardService = (body) => async (dispatch) => {
  dispatch(setDashboardLoader(true));
  return ds
    .getDashboardScoreboard(body)
    .then(res => {
      dispatch(setDashboardLoader(false));
      if (res.error) {
        dispatch(setDashboardTotalCount(0));
        dispatch(setDashboardData([]));
        dispatch(setDashboardLoader(false));
        if (res.code === 401) {

        }
        dispatch(displayPopup(res.error, 'warning', 2000));
      } else {
        if (res.totalCount) {
          dispatch(setDashboardTotalCount(res.totalCount));
        } else dispatch(setDashboardTotalCount(50));
        if (res && res.data && res.data.length > 0) {
          dispatch(setDashboardData(res.data));
        } else {
          dispatch(setDashboardData([]));
        }
      }
    })
    .catch(e => {
      dispatch(setDashboardTotalCount(0));
      dispatch(setDashboardData([]));
      dispatch(setDashboardLoader(false));
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

export const getStatsData = (body) => async (dispatch) => {
  dispatch(setUpdateStatsLoader(true));
  return ds
    .getStatsService(body)
    .then(res => {
      if (res) {
        if (res.code && res.code == 200) {
          if (res.data && res.data.length > 0) {
            const eventids = [...new Set(res.data.map(x => x.eventid))];
            callForward(eventids, 'stats', dispatch, true, res.data, body);
          }
        } else {
          if (res.msg && res.msg == 'All events are not dumped') {
            dispatch(getWeekAllEvents(body, 'stats'));
          }
          else {
            dispatch(setUpdateStatsLoader(false));
          }
        }
      }
    })
    .catch(e => {
      dispatch(setUpdateStatsLoader(false));
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

export const postStatsData = (body) => async (dispatch) => {
  dispatch(setUpdateStatsLoader(true));
  return ds
    .postStatsService(body)
    .then(res => {
      dispatch(setUpdateStatsLoader(false));
      if (res.code == 200) {
        dispatch(displayPopup('Week data updated', 'success', 2000));
      }
    })
    .catch(e => {
      dispatch(setUpdateStatsLoader(false));
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

export const postPickStatsService = (body) => async (dispatch) => {
  return ds
    .postPickStats(body)
    .then(res => {

    })
    .catch(e => {

    });
};