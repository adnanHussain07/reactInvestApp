export const Roles = {
  superadmin: 'superadmin',
  admin: 'admin',
  user: 'user',
};

export const InvestRoles = {
  superadmin: 1,
  admin: 2,
  user: 3,
};

export const Gateways = {
  btc: 1,
  usdt: 2,
};

export const Permissions = {
  EXPORT: "EXPORT",
  ADDUSER: "ADDUSER",
  ADDREGISTER: "ADDREGISTER",
  ADDITEM: "ADDITEM",
  DELETEITEM: "DELETEITEM",
  DELETEUSER: "DELETEUSER",
  DELETEREGISTER: "DELETEREGISTER",
  CHANGESTATUS: "CHANGESTATUS",
  SEEREGISTERUSERS: "SEEREGISTERUSERS",
}

export const Menus = {
  DASHBOARDS: 'dashboard',
  INVESTPLANS: 'investplans',
  LOGS: 'logs',
  EARN: 'earn',
  RETINTLOG: 'retinvlog',
  DEPOSITNOW: 'depositnow',
  WITHDRAWNOE: 'withdrawnow',
  DEPHISTORY: 'deposithist',
  WITHHISTORY: 'withdeahist',
  TRANSHISTORY: 'transhist',
  REFERRALSTATS: 'refstats',
  PROFILE: 'profile',
  CHANGEPASS: 'changepass',
  SUPPTICKET: 'suppticket',
  TWOFASEC: 'twofa',
  SETTING: 'Settings',
  DEPOSITAPPROVE: 'DepositApprove',
  WITHDRAWAPPROVE: 'WithdrawApprove',
};

export const RoleMenus = [
  // default created super admin
  {
    id: InvestRoles.superadmin,
    access: [
      Menus.DASHBOARDS,
      Menus.RETINTLOG,
      Menus.EARN,
      Menus.LOGS,
      Menus.TRANSHISTORY,
      Menus.RETINTLOG,
      Menus.DEPOSITNOW,
      Menus.WITHDRAWNOE,
      Menus.DEPHISTORY,
      Menus.WITHHISTORY,
      Menus.PROFILE,
      Menus.CHANGEPASS,
      Menus.REFERRALSTATS,
      Menus.TWOFASEC,
      Menus.SETTING,
    ],
    permissions: [
      Permissions.ADDITEM,
      Permissions.ADDREGISTER,
      Permissions.ADDUSER,
      Permissions.CHANGESTATUS,
      Permissions.DELETEITEM,
      Permissions.DELETEREGISTER,
      Permissions.DELETEUSER,
      Permissions.EXPORT,
      Permissions.SEEREGISTERUSERS,
    ],
  },
  // register admin
  {
    id: InvestRoles.admin,
    access: [
      Menus.DASHBOARDS,
      Menus.RETINTLOG,
      Menus.EARN,
      Menus.LOGS,
      Menus.TRANSHISTORY,
      Menus.RETINTLOG,
      Menus.DEPOSITNOW,
      Menus.WITHDRAWNOE,
      Menus.DEPHISTORY,
      Menus.WITHHISTORY,
      Menus.PROFILE,
      Menus.CHANGEPASS,
      Menus.REFERRALSTATS,
      Menus.TWOFASEC,
      Menus.SETTING,
    ],
    permissions: [
      Permissions.ADDITEM,
      Permissions.ADDREGISTER,
      Permissions.ADDUSER,
      Permissions.CHANGESTATUS,
      Permissions.DELETEITEM,
      Permissions.DELETEREGISTER,
      Permissions.DELETEUSER,
      Permissions.EXPORT,
      Permissions.SEEREGISTERUSERS,
    ],
  },
  // register user
  {
    id: InvestRoles.user,
    access: [
      Menus.ITEMS,
      Menus.USERS,
      Menus.CREATEITEM,
      Menus.CREATEUSER,
      Menus.LOGS,
      Menus.ADD,
      Menus.CHANGEPASS,
      Menus.DASH
    ],
    permissions: [
      Permissions.ADDITEM,
      Permissions.ADDUSER,
      Permissions.CHANGESTATUS,
    ],
  },
];

export const DefFilters = {
  NEW: 14,
  INPROGRESS: 15,
  COMPLETED: 16,
  PENDING: 17,
  DONE: 18,
  OTHER: -1,
  ALL: 0
}

export const ReqColorCodes = {
  btn: '-webkit-linear-gradient(left, #31f316, #bef310, #ecaf0e)',
  btnText: 'black',
}

export const DEFAULTUSERPIC = 'assets/images/avataruser.png';

export const DateTimeFormat = 'DD/MM/YYYY hh:mm a';
export const DateFormat = 'DD/MM/YYYY';
export const DateTimeFormatNew = 'lll';
export const GoogleMapUri = 'https://www.google.com/maps/search/?api=1&query=';

