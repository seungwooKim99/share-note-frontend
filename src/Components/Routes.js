import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import SharedFeed from "../Routes/SharedFeed";
import MyNotes from "../Routes/MyNotes";
import Profile from "../Routes/Profile";
import Auth from "../Routes/Auth";
import MakeMatch from "../Routes/MakeMatch";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={MakeMatch} />
        <Route path="/sharedfeed" component={SharedFeed} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/profile" component={Profile} />
        <Redirect from="*" to="/" />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/Auth" component={Auth} />
        <Redirect from="*" to="/Auth" />
    </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;