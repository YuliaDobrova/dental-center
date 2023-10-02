import { lazy } from 'react';

const servicesRoutes = [
  {
    name: 'Хірургія',
    path: '/services/surgery',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/surgeryPage/surgeryPage.js')),
  },
  {
    name: 'Лікування зубів',
    path: '/services/treatment',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/treatmentPage/treatmentPage.js')),
  },
  {
    name: 'Імплантація зубів',
    path: '/services/implantation',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/implantationPage/implantationPage.js')),
  },
  {
    name: 'Пародонтологія',
    path: '/services/periodontics',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/periodonticsPage/periodonticsPage.js')),
  },
  {
    name: 'Естетична стоматологія',
    path: '/services/aesthetics',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/aestheticsPage/aestheticsPage.js')),
  },
  {
    name: 'Протезування',
    path: '/services/prosthetics',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/prostheticsPage/prostheticsPage.js')),
  },
  {
    name: 'Професійна гігієна',
    path: '/services/hygiene',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/hygienePage/hygienePage.js')),
  },
  {
    name: 'Ортодонтія',
    path: '/services/orthodontics',
    exact: true,
    component: lazy(() => import('../pages/allServicesPages/orthodonticsPage/orthodonticsPage.js')),
  },
];
export default servicesRoutes;
