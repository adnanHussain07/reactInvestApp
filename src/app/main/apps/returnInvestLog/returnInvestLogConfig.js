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
  routes: [
    {
      path: '/venapp/interestlog',
      component: lazy(() => import('./returnInvest')),
    },
  ],
};

export default ReturnInvestLogConfig;
