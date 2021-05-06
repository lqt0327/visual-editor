import React from "react";
import { renderRoutes } from "react-router-config";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

/**
 * @des 登录效验
 */
const Layout = ({ route, ...props }) => {

    const uid = props.uid ? props.uid : localStorage.getItem('uid')

    const auth = (uid) => {
        return Boolean(uid) ? "" : () => <Redirect to={"/login"} />
    }

    route.routes.map((item,index)=>{
        if(item.auth) {
            item.render = auth(uid)
        }
    })
    
    return (
        <>{renderRoutes(route.routes)}</>
    )
}

const mapStateToProps = (state) => ({
    uid: state.getIn(['panels', 'comp_i'])
})

export default connect(mapStateToProps)(React.memo(Layout))