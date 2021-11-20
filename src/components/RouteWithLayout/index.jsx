import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

const RouteWithLayout = props => {
    const { layout: Layout, component: Component, ...rest } = props;
    const loggedIn = localStorage.getItem("__CUSTOMER_TOKEN__")
    return (
        <Route
            {...rest}
            render={matchProps => {

                const { location } = matchProps
                if (!loggedIn) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/auth/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
                return (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )
            }}
        />
    );
};

export default RouteWithLayout;
