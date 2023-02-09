import { authRoles } from 'app/auth';
import { lazy } from 'react';

const WithdrawApproveConfig = {
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
      path: '/venapp/approvewithdraw',
      component: lazy(() => import('./withdrawApprove')),
    },
  ],
};

export default WithdrawApproveConfig;
