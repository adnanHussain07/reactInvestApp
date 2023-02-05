import { authRoles } from 'app/auth';
import { lazy } from 'react';

const Error404PageConfig = {
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
          display: false,
        },
      },
    },
  },
  auth: authRoles.investUser,
  routes: [
    {
      path: '/pages/errors/error-404',
      component: lazy(() => import('./Error404Page')),
    },
  ],
};

export default Error404PageConfig;
