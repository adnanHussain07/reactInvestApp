import { authRoles } from 'app/auth';
import { lazy } from 'react';

const DepositApproveConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: true,
        },
      },
    },
  },
  auth: authRoles.investAdmin,
  routes: [
    {
      path: '/venapp/approvedeposit',
      component: lazy(() => import('./depositApprove')),
    },
  ],
};

export default DepositApproveConfig;
