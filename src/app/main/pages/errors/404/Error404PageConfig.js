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
          display: true,
        },
      },
    },
  },
  routes: [
    {
      path: '/pages/errors/error-404',
      component: lazy(() => import('./Error404Page')),
    },
  ],
};

export default Error404PageConfig;
