import { authRoles } from 'app/auth';
import { lazy } from 'react';

const PricingStyle2PageConfig = {
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
      path: '/venapp/investmentplan',
      component: lazy(() => import('./PricingStyle2Page')),
    },
  ],
};

export default PricingStyle2PageConfig;
