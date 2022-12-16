import { lazy } from 'react';

const ThirdPartyComponentsRoutes = [
  {
    path: '/documentation/third-party-components/react-hook-form',
    component: lazy(() => import('./react-hook-form/ReactHookFormDoc')),
  },
  {
    path: '/documentation/third-party-components/react-table',
    component: lazy(() => import('./react-table/ReactTableDoc')),
  },
  {
    path: '/documentation/third-party-components/google-map-react',
    component: lazy(() => import('./google-map-react/GoogleMapReactDoc')),
  },
  {
    path: '/documentation/third-party-components/react-apexcharts',
    component: lazy(() => import('./react-apexcharts/ReactApexchartsDoc')),
  },
];

export default ThirdPartyComponentsRoutes;
