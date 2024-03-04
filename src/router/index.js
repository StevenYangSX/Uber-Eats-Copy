// create route-view  component
import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

const RouterView = function RouterView(props) {
  let { routes } = props;
  return (
    <Switch>
      {routes.map((item, index) => {
        let { redirect, exact, from, to, path, component: Component } = item;

        let config = {};

        if (redirect) {
          config = { to };
          if (from) config.from = from;
          if (exact) config.exact = exact;
          return <Redirect key={index} {...config} />;
        }

        config = { path };
        if (exact) config.exact = true;
        return (
          <Route
            key={index}
            {...config}
            render={(props) => {
              console.log("check props...", props);
              return (
                <Suspense fallback={<>loading......</>}>
                  <Component {...props} />
                </Suspense>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};
export default RouterView;
