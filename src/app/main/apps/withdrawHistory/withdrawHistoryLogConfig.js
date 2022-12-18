import { lazy } from 'react';

const WithdrawHistoryLogConfig = {
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
      path: '/venapp/withdrawhistory',
      component: lazy(() => import('./withdrawHistory')),
    },
  ],
};

export default WithdrawHistoryLogConfig;
