import React from "react";
import './style.sass'

function preview(props) {
    return (
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
                                        props.arr.map((item,i)=>{
                                            return (
                                                <React.Fragment key={i} >
                                                    {
                                                        item()
                                                    }
                                                    {/* <div className="placeholder-container vm-loadable">
                                                        <div className="viewport__placeholder">放置在该位置</div>
                                                    </div> */}
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
    )
}

export default React.memo(preview)