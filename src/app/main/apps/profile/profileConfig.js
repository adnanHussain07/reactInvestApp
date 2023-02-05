import { authRoles } from 'app/auth';
import { lazy } from 'react';

const ProfileConfig = {
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
      path: '/venapp/profile',
      component: lazy(() => import('./profile')),
    },
  ],
};

export default ProfileConfig;
