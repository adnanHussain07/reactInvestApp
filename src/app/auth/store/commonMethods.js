import i18next from 'i18next';
import { Menus, RoleMenus } from './constants';
import { logoutUser } from './userSlice';

export function isEmptyObject(obj) {
  if (obj != undefined) {
    return !Object.keys(obj).length;
  }
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const handleResponse = (err, isSuccess, directValue) => async (dispatch) => {
  let value = '';
  let type = '';
  let time = 2000;
  let blob = err;
  if (isSuccess) {
    value = err ? err : '';
    type = 'success';
  } else {
    blob = blob && blob.response ? blob.response : {}
    if (!isEmptyObject(blob) && blob.data && blob.data == "Authentication Invalid") {
      value = 'SESSIONEXPIRED';
      type = 'error';
      time = 5000;
      dispatch(logoutUser());
    } else {
      value = 'SOMEWENTWRNG'; // err ? err : '';
      type = 'warning';
    }
  }

  if (value == '') {
    value = 'FISHY';
    type = 'warning';
  }

  if (window.location.pathname == '/login' && !isSuccess) {
    type = 'warning';
  }
  if (!directValue) {
    value = i18next.t(`navigation:${value}`)
  }
  else {
    if (directValue) {
      type = 'info';
      time = 4000;
    }
  }
  dispatch(displayPopup(value, type, time));
};

export function evenOrOdd(num) {
  //for string length take string
  if (num % 2 == 0) {
    //and replace numm with string.length here
    return "even";
  } else {
    return "odd";
  }
}

export function toFindDuplicates(arry) {
  const result = [];
  const reqNos = arry.map(a => {
    return a.reqNo;
  });
  if (reqNos && reqNos.length > 0) {
    const dups = reqNos.filter(onlyUnique);
    // const find = xc => xc.filter((item, index) => xc.indexOf(item) !== index)
    // const dups = find(reqNos);
    if (dups && dups.length > 0) {
      dups.map((qq, ii) => {
        const isEven = evenOrOdd(ii);
        const da = {
          id: qq,
          clrCode: isEven == "even" ? ReqColorCodes.code1 : ReqColorCodes.code2,
        }
        result.push(da);
      });
    }
  }

  return result;
}

export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const displayPopup = (msg, type, duration) => (dispatch) => {
  dispatch(showMessage({
    message: msg,
    autoHideDuration: duration ? duration : 2000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    variant: type //success error info warning null
  }));
}

export const assignTiesto = (path, isShorts) => (dispatch, getState) => {
  const role = 'admin'; // getState().auth.user.roleid ? getState().auth.user.roleid : "";
  let res = {
    navigation: [],
    shorts: []
  }
  if (role && path && path.length > 0) {
    let pathCheck = path; // path.filter(ax => ax.id == Menus.APP);
    const paths = pathCheck;
    const loginRole = RoleMenus.filter(a => a.id == role).length > 0 ? RoleMenus.filter(a => a.id == role)[0] : {};
    if (loginRole && !isEmptyObject(loginRole)) {
      if (isShorts) {

        paths && paths.map(ii => {
          loginRole.access.filter(pp => pp == ii.id).map(qq => {
            res.shorts.push(qq);
          })
        });
      } else {
        if (pathCheck && pathCheck.length > 0
          && pathCheck[0].children && pathCheck[0].children.length > 0) {
          const navis = [];
          paths && paths.map(ii => {
            loginRole.access.filter(pp => pp == ii.id).map(qq => {
              if (!ii.children) {
                navis.push(ii);
                return;
              } else {
                const allowedChildren = [];
                ii.children.map(xx => {
                  loginRole.access.filter(zz => zz == xx.id).map(cc => {
                    allowedChildren.push(xx);
                    return;
                  })
                });
                ii.children = allowedChildren;
                navis.push(ii);
                return;
              }
            })
          });
          pathCheck[0].children = navis;
          res.navigation = pathCheck;
        }
      }
    }
  }
  // if (Roles.admin == role || Roles.staff == role || Roles.charity == role || Roles.external == role) {

  //   res.shorts = [Menus.ITEMS, Menus.REQUESTS, Menus.WEIGHT, Menus.CUSTOMERS, Menus.FEEDBACK, Menus.DRIVERS, Menus.SETTING];
  // }
  // else if (Roles.driver == role) {
  //   res.shorts = [Menus.REQUESTS, Menus.WEIGHT, Menus.CUSTOMERS, Menus.FEEDBACK, Menus.DRIVERS];
  // }
  return res;
}

export const checkAccess = (path) => (dispatch, getState) => {
  const role = 'admin'; // getState().auth.user.roleid ? getState().auth.user.roleid : '';
  let res = 'not_allow';
  if (role && path) {
    const loginRole = RoleMenus.filter(a => a.id == role).length > 0 ? RoleMenus.filter(a => a.id == role)[0] : {};
    if (loginRole && !isEmptyObject(loginRole)) {
      loginRole.access.filter(bb => bb == path).map(aa => {
        res = 'allowed';
        return;
      });
    }
  }
  return res;
}

export const checkPermission = (perm) => (dispatch, getState) => {
  const role = 'admin'; // getState().auth.user.roleid ? getState().auth.user.roleid : '';
  let res = 'not_allow';
  if (role && perm) {
    const loginRole = RoleMenus.filter(a => a.id == role).length > 0 ? RoleMenus.filter(a => a.id == role)[0] : {};
    if (loginRole && !isEmptyObject(loginRole)) {
      loginRole.permissions.filter(bb => bb == perm).map(aa => {
        res = 'allowed';
        return;
      });
    }
  }
  return res;
}