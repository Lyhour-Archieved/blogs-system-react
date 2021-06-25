import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import LoginPage from "../page/login.page";
import HomePage from "../page/home.page";
import DashboardPage from "../page/dashboard";
import { PATH_ENUM } from "./path";

const routeList: RouteProps[] = [
  { children: <LoginPage />, path: PATH_ENUM.LOGIN, exact: true },
  { children: <HomePage />, path: PATH_ENUM.HOME, exact: true },
  { children: <DashboardPage />, path: PATH_ENUM.DASHBOARD, exact: true },
];

export const RouteView = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          {routeList.map((data) => {
            return (
              <Route
                children={data.children}
                path={data.path}
                exact={data.exact}
              />
            );
          })}
        </Switch>
      </Router>
    </Fragment>
  );
};
