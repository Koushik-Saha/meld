import React from 'react'
import {
    Switch,
} from 'react-router-dom'
import BasicLayout from "./layout/BasicLayout";
import RouteWithOutAuthLayout from "./components/RouteWithOutAuthLayout";

const Login = React.lazy(() => import('./page/Auth/Login'))

const Routes = () => {

    return (
        <Switch>
            <RouteWithOutAuthLayout
                component={Login}
                layout={BasicLayout}
                path="/auth/login"
            />
        </Switch>
    )
}

export default Routes;
