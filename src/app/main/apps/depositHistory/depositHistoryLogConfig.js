import { authRoles } from 'app/auth';
import { lazy } from 'react';

const DepositHistoryLogConfig = {
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
  auth: authRoles.investUser,
  routes: [
    {
      path: '/venapp/deposithistory',
      component: lazy(() => import('./depositHistory')),
    },
  ],
};

export default DepositHistoryLogConfig;
