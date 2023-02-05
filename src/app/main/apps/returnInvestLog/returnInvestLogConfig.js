import { authRoles } from 'app/auth';
import { lazy } from 'react';

const ReturnInvestLogConfig = {
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
      path: '/venapp/interestlog',
      component: lazy(() => import('./returnInvest')),
    },
  ],
};

export default ReturnInvestLogConfig;
