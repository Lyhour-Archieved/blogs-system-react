import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "../page/login.page";
import { PATH_ENUM } from "./path";

export const RouteView = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path={PATH_ENUM.LOGIN}>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};
