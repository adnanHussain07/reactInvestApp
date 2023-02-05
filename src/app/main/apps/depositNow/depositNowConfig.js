import { authRoles } from 'app/auth';
import { lazy } from 'react';

const DepositNowConfig = {
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
      path: '/venapp/depositnow:amount',
      component: lazy(() => import('./depositNow')),
    },
  ],
};

export default DepositNowConfig;
