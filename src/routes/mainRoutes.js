import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'Головна',
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/homePage/HomePage.js')),
  },
  {
    name: 'Про нас',
    path: '/about',
    exact: true,
    component: lazy(() => import('../pages/aboutPage/AboutPage.js')),
  },
  {
    name: 'Послуги',
    path: '/services',
    exact: true,
    component: lazy(() => import('../pages/servicesPage/ServicesPage.js')),
  },
  {
    name: 'Акції та знижки',
    path: '/discounts',
    exact: true,
    component: lazy(() => import('../pages/discountsPage/DiscountsPage.js')),
  },
  {
    name: 'Контакти',
    path: '/contacts',
    exact: true,
    component: lazy(() => import('../pages/contactsPage/ContactsPage.js')),
  },
  {
    name: 'Прайс',
    path: '/price',
    exact: true,
    component: lazy(() => import('../pages/pricePage/PricePage.js')),
  },
];

export default mainRoutes;
