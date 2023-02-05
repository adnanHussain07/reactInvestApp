import { InvestRoles } from "./store/constants";

/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['admin'],
  staff: ['admin', 'staff'],
  user: ['admin', 'staff', 'user'],
  investSuperAdmin: [InvestRoles.superadmin],
  investAdmin: [InvestRoles.superadmin, InvestRoles.admin],
  investUser: [InvestRoles.superadmin, InvestRoles.admin, InvestRoles.user],
  onlyGuest: [],
};

export default authRoles;
