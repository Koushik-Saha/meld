import React from 'react'
import {
    Switch,
} from 'react-router-dom'
import BasicLayout from "./layout/BasicLayout";
import RouteWithOutAuthLayout from "./components/RouteWithOutAuthLayout";
import RouteWithLayout from "./components/RouteWithLayout";

const Login = React.lazy(() => import('./page/Auth/Login'))
const Devices = React.lazy(() => import('./page/Devices'))

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
                path="/"
            />
        </Switch>
    )
}

export default Routes;
