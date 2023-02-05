import { authRoles } from 'app/auth';
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
  auth: authRoles.investUser,
  routes: [
    {
      path: '/venapp/newsuppticket',
      component: lazy(() => import('./newSupportTicket')),
    },
  ],
};

export default NewSupportTicketConfig;
