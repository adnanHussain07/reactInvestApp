import { lazy } from 'react';

const NewSupportTicketConfig = {
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
      path: '/venapp/newsuppticket',
      component: lazy(() => import('./newSupportTicket')),
    },
  ],
};

export default NewSupportTicketConfig;
