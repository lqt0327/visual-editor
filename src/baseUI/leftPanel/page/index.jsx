import React from "react";
import './style.sass'

function LeftPanel() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default React.memo(LeftPanel)