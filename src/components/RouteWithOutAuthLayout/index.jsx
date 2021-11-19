import React from 'react';
import {
    Route
} from 'react-router-dom';

const RouteWithOutAuthLayout = props => {
    const { layout: Layout, component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={matchProps => {
                return (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )
            }}
        />
    );
};

export default RouteWithOutAuthLayout;
