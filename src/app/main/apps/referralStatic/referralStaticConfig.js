import { authRoles } from 'app/auth';
import { lazy } from 'react';

const ReferralStaticConfig = {
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
      path: '/venapp/referralstats',
      component: lazy(() => import('./referralStatic')),
    },
  ],
};

export default ReferralStaticConfig;
