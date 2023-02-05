import { authRoles } from 'app/auth';
import { lazy } from 'react';

const TwoFASecurityConfig = {
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
      path: '/venapp/twofasecure',
      component: lazy(() => import('./twoFASecurity')),
    },
  ],
};

export default TwoFASecurityConfig;
