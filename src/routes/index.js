import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from 'src/layouts/BlankLayout';

const HomeComponent = lazy(() => import("src/application/Home"))
const UserComponent = lazy(() => import("src/application/User"))
const LoginComponent = lazy(() => import("src/application/Login"))
const RegisterComponent = lazy(() => import("src/application/Register"))

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={<React.Fragment />}>
            <Component {...props}></Component>
        </Suspense>
    )
}

const routes = [
    {
        component: BlankLayout,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to={"/home"} />
            },
            {
                path: "/home",
                component: SuspenseComponent(HomeComponent),
                auth: true
            },
            {
                path: "/user",
                component: SuspenseComponent(UserComponent),
                auth: true
            },
            {
                path: "/login",
                component: SuspenseComponent(LoginComponent),
            },
            {
                path: "/register",
                component: SuspenseComponent(RegisterComponent),
            }
        ]
    }
]

export default routes