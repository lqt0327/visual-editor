import React from "react";
import { renderRoutes } from "react-router-config";

const Layout = ({ route }) => {
console.log(route,'[[[[')
const uid = localStorage.getItem('uid')
console.log()
    return (
        <>
        {
            renderRoutes(route.routes)
        }
        </>
    )
}

export default Layout;