import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_PAGE, MAIN_PAGE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const AppRouter = () => {

    const { auth } = useContext(Context)

    const [user] = useAuthState(auth)

    return user ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={MAIN_PAGE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={LOGIN_PAGE} />
            </Switch>
        )
};

export default AppRouter;