import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from 'src/layouts/BlankLayout';

const HomeComponent = lazy(() => import("src/application/Home"))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={<React.Fragment />}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes: [
        {
            path: '/',
            exact: true,
            render: () => <Redirect to={"/home"} />
        },
        {
            path: "/home",
            component: SuspenseComponent(HomeComponent)
        }
    ]
}]