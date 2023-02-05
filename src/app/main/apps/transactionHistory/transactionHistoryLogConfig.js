import { authRoles } from 'app/auth';
import { lazy } from 'react';

const TransactionHistoryLogConfig = {
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
      path: '/venapp/transhistory',
      component: lazy(() => import('./transactionHistory')),
    },
  ],
};

export default TransactionHistoryLogConfig;
