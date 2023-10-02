import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Loader from 'react-loader-spinner';

import Container from '../container/Container';
import mainRoutes from '../../routes/mainRoutes.js';
import serviceRoutes from '../../routes/servicesRoutes';
import './Main.css';

const Main = () => {
  return (
    <main className="Main">
      <Container>
        <Suspense
          fallback={
            <Loader type="Bars" color="#81adde" height={80} width={80} className="loader" />
          }
        >
          <Switch>
            {mainRoutes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.name}
              />
            ))}
            {serviceRoutes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.name}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </main>
  );
};

export default Main;
