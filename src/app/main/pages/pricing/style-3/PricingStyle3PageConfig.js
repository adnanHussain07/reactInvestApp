import { lazy } from 'react';

const PricingStyle3PageConfig = {
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
      },    },
  },
  routes: [
    {
      path: '/pages/pricing/style-3',
      component: lazy(() => import('./PricingStyle3Page')),
    },
  ],
};

export default PricingStyle3PageConfig;
