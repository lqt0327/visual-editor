import React, { useCallback, useEffect, useState } from "react";
import { Header } from "baseUI";
import * as components from "components";
import cx from "classnames";
import "./style.sass";

function Home() {
    const [arr,setArr] = useState([components.Header,components.LouCengBiaoTi,components.LouCengJianGe])

    return (
        <div className="l-eidtor">
            <Header />
            <main>
                <div className="l-panel" style={{width:"336px"}}>
                    <div className="l-panel-container">
                        <h3>页面列表<i className="icon iconfont">&#xe75e;</i></h3>
                        <div className="l-panel-list">
                            <div className="l-panel-item l-panel-item-active">
                                <div className="l-panel-item__drag"></div>
                                <div className="l-panel-item__title">
                                    <h4><span>未命名页面</span><em>首页</em></h4>
                                    <span className="l-panel__title--path">a.html</span>
                                </div>
                                <i className="icon iconfont">&#xe7f5;</i>
                            </div>
                            <div className="l-panel-item">
                                <div className="l-panel-item__drag"></div>
                                <div className="l-panel-item__title">
                                    <h4><span>未命名页面</span></h4>
                                    <span className="l-panel__title--path">a.html</span>
                                </div>
                            </div>
                            <div className="l-panel-item">
                                <div className="l-panel-item__drag"></div>
                                <div className="l-panel-item__title">
                                    <h4><span>未命名页面</span></h4>
                                    <span className="l-panel__title--path">a.html</span>
                                </div>
                            </div>
                        </div>
                        <div className="l-panel-add">
                            <span><i className="icon iconfont">&#xe8a1;</i>添加页面</span>
                        </div>
                    </div>
                </div>
                <div className="l-panel-animate" style={{width:"336px"}}></div>
                <div className="l-preview">
                    <div className="l-page-path-container">
                        <div className="l-page-path">
                            <div className="l-pp-url"><span>https://render.yunfengdie.cn/p/q/kj9nbl7b</span></div>
                            <div className="l-pp-share"><i className="icon iconfont">&#xe7d0;</i></div>
                        </div>
                    </div>
                    <div className="l-prevew-box">
                        <div className="l-preview-iframe">
                            <div className="l-preview-scroll">
                                <div className="lAnt-spin-nested-loading">
                                    <div className="lAnt-spin__main" style={{background:"rgb(255,255,255)"}}>
                                        <div className="lAnt-spin__main-inner" style={{paddingBottom:"0px"}}>
                                            {
                                                arr.map((item,i)=>{
                                                    return (
                                                        <React.Fragment key={i} >
                                                            {
                                                                item()
                                                            }
                                                            <div className="placeholder-container vm-loadable">
                                                                <div className="viewport__placeholder">放置在该位置</div>
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                            <div className="lAnt-spin__main-first-screen-line"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-preview-container">
                            <div className="l-preview-tips" style={{height:'600px'}}>
                                <div className="l-view-hover-tip" style={{top:'0px',height:'140px'}}></div>
                                <div className="l-view-active-tip" style={{top:'0px',height:'140px'}}></div>
                                <div className="l-view-tools" style={{top:'8px'}}>
                                    {/* <div className="l-tools-move l-tools-move-single"> */}
                                    <div className="l-tools-move">
                                        <i className="icon iconfont">&#xe703;</i>
                                        <i className="icon iconfont">&#xe780;</i>
                                    </div>
                                    <div className="l-tools-copy">
                                        <i className="icon iconfont">&#xe767;</i>
                                    </div>
                                    <div className="l-tools-delete">
                                        <i className="icon iconfont">&#xe74e;</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default React.memo(Home);