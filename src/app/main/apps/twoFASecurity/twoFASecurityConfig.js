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
  routes: [
    {
      path: '/venapp/twofasecure',
      component: lazy(() => import('./twoFASecurity')),
    },
  ],
};

export default TwoFASecurityConfig;
