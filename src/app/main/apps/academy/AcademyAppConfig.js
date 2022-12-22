import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const AcademyAppConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: true,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: '/apps/academy/courses/:courseId/:courseHandle?',
      component: lazy(() => import('./course/Course')),
    },
    {
      path: '/venapp/home',
      component: lazy(() => import('./courses/Courses')),
    },
    // {
    //   path: '/apps/academy',
    //   component: () => <Redirect to="/apps/academy/courses" />,
    // },
  ],
};

export default AcademyAppConfig;
