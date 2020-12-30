import React, { useCallback, useEffect, useState } from "react";
import { Header, Footer } from "baseUI";
import * as components from "components";
import cx from "classnames";
import "./style.sass";

function Home() {
    return (
        <div>
            <header className="l-header">
                <nav>
                    <div className="header-left">
                        <div className="header-left-logo">
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/ZLdipPynpsirzAfeulEf.png" alt=""/>
                        </div>
                        <div className="header-left-tabbar">
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
            <main>
                <div className="l-panel"></div>
                <div className="l-preview"></div>
            </main>
        </div>
    )
}

export default React.memo(Home);