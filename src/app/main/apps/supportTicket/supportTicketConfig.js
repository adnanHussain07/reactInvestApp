import { authRoles } from 'app/auth';
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
  auth: authRoles.investUser,
  routes: [
    {
      path: '/venapp/suppticket',
      component: lazy(() => import('./supportTicket')),
    },
  ],
};

export default SupportTicketConfig;
