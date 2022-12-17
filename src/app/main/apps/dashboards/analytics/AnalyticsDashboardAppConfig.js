import { lazy } from 'react';

const AnalyticsDashboardAppConfig = {
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
      path: '/venapp/dashboard',
      component: lazy(() => import('./AnalyticsDashboardApp')),
    },
  ],
};

export default AnalyticsDashboardAppConfig;
