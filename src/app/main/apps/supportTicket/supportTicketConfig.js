import { lazy } from 'react';

const SupportTicketConfig = {
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
      path: '/venapp/suppticket',
      component: lazy(() => import('./supportTicket')),
    },
  ],
};

export default SupportTicketConfig;
