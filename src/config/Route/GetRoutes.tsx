import React, { Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import Routes from "./RouteConfig";

function GetRoutes() {
  return (
    <Suspense
      fallback={
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
      }
    >
      <Switch>
        {Routes.map((route,indx) => {
          const { path, exact, component } = route;
          return <Route key={indx} path={path} exact={exact} component={component} />;
        })}
      </Switch>
    </Suspense>
  );
}

export default GetRoutes