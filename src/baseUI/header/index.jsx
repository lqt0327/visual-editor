import React, { useCallback, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { changePage } from 'store/actions'
import cx from "classnames";
import "./style.sass";

function Header(props) {

    const { changePageStateDispatch } = props

    return (
        <header className="l-header">
            <nav>
                <div className="header-left">
                    <div className="header-left-logo">
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/ZLdipPynpsirzAfeulEf.png" alt=""/>
                    </div>
                    <div className="header-left-tabbar" onClick={()=>{
                        changePageStateDispatch('page');console.log(props,'[[[123')
                    }}>
                        <span className="header-left-tabbar__icon">
                            <i className="icon iconfont">&#xe75d;</i>
                        </span>
                        <span className="header-left-tabbar__text">
                            页面：专题 - 5
                        </span>
                    </div>
                </div>
                <div className="header-right">
                    <span className="header-right-preview"><i className="icon iconfont">&#xe752;</i>&nbsp;预览</span>
                    <span className="header-right-save"><i className="icon iconfont">&#xe7c8;</i>&nbsp;保存</span>
                    <div className="header-right-publish">
                        <button type="button" className="header-right-publish-btn"><i className="icon iconfont">&#xe6a9;</i>发布</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    panel: state.getIn(['panels', 'currentPanel'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePageStateDispatch(data) {
            dispatch(changePage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header))