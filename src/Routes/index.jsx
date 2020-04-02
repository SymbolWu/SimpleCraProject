import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Overview from '@/Page/Overview';
// import ProductConfig from '@/Page/ProductConfig';
// import ProductList from '@/Page/ProductList';
import { BasicRouteTree, AdminRouteTree } from './routesTree';

const AdminRoute = () => {
  const children = [];
  AdminRouteTree.forEach(route => {
    if (route.children && route.children.length) {
      route.children.forEach(subRoute => {
        children.push(
          <Route
            exact={subRoute.exact}
            path={subRoute.path}
            component={subRoute.component}
          />
        )
      })
    }
    children.push(
      <Route
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    )
  })
  return (
    <Switch>
      {children}
    </Switch>
  )
}

const BasicRoute = () => (
  <Switch>
    {
      BasicRouteTree.map(route => (
        <Route
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))
    }
  </Switch>
)
export { BasicRoute, AdminRoute }