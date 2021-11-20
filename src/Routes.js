import React from 'react'
import {
    Switch,
} from 'react-router-dom'
import BasicLayout from "./layout/BasicLayout";
import RouteWithOutAuthLayout from "./components/RouteWithOutAuthLayout";
import RouteWithLayout from "./components/RouteWithLayout";

const Login = React.lazy(() => import('./page/Auth/Login'))
const Devices = React.lazy(() => import('./page/Devices'))
const Notify = React.lazy(() => import('./page/Notify'))

const Routes = () => {

    return (
        <Switch>
            <RouteWithOutAuthLayout
                component={Login}
                layout={BasicLayout}
                path="/auth/login"
            />
            <RouteWithLayout
                component={Devices}
                layout={BasicLayout}
                exact
                path="/"
            />

            <RouteWithLayout
                component={Notify}
                layout={BasicLayout}
                path="/notify"
            />
        </Switch>
    )
}

export default Routes;
