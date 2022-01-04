import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { Login } from "./Login";
import { Profile } from "./Profile";

export const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => <Redirect to="/login" />}
                />
                <Route
                    exact
                    path="/login"
                    render={() => (
                        <Login />
                    )}
                />
                <Route
                    exact
                    path="/profile"
                    render={() => (
                        <Profile />
                    )}
                />
                <Route
                    exact
                    path="*"
                    component={() => <Redirect to="/login" />}
                />
            </Switch>
        </Router>
    );
};
