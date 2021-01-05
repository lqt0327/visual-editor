import React from "react";
import './style.sass'

function LeftPanel() {
    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <div className="l-schema-navbar">
                                <div className="ant-breadcrumb">
                                    <span>
                                        <span className="ant-breadcrumb-link">Banner</span>
                                        <span className="ant-breadcrumb-separator">&gt;</span>
                                    </span>
                                </div>
                                <i className="icon iconfont">&#xe75e;</i>
                            </div>
                            <div className="schema-editor-scroll">
                                <div className="schema-editor-container">
                                    <div className="ui-object">
                                        <div className="field-item field-image">
                                            <div className="ui-form-item item-image item-image-upload">
                                                <div className="ui-label">
                                                    <span className="ui-label-title" title="图片">图片<p title="建议尺寸：750*280">建议尺寸：750*280</p></span>
                                                    <span>
                                                        <div className="ant-upload ant-upload-select ant-upload-select-text">
                                                            <span className="ant-upload" tabIndex="0" role="button">
                                                                <input type="file" accept="image/*" style={{display:"none"}} />
                                                                <span>
                                                                    <i className="icon iconfont">&#xe7b1;</i>选择图片
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="ant-upload-list ant-upload-list-text"></div>
                                                    </span>
                                                </div>
                                                <div className="ui-content">
                                                    <div className="item-image-preview">
                                                        <div style="background-image: url(&quot;https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png&quot;);"></div>
                                                        <span className="common-copy item-image-preview-url">
                                                            <span style={{cursor:"pointer"}}>
                                                                <span>nKBqduiIsQWrHPVehZrG.png</span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field-item field-url">
                                            <div className="ui-form-item item-url-input">
                                                <span className="ui-label" title="link">链接</span>
                                                <div className="ui-content">
                                                    <div className="fdAnt-select-lg item-checktype fdAnt-select fdAnt-select-enabled">
                                                        <div className="fdAnt-select-selection fdAnt-select-selection--single">
                                                            <div className="fdAnt-select-selection__rendered">
                                                                <div className="fdAnt-select-selection-selected-value" title="链接地址" style={{display:"block",opacity:"1"}}>
                                                                    链接地址
                                                                </div>
                                                            </div>
                                                            <span className="fdAnt-select-arrow" style={{userSelect:"none"}}>
                                                                <i className="icon iconfont">&#xe8a4;</i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="item-type-url">
                                                        <input type="text" className="fdAnt-input fdAnt-input-lg"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}

export default React.memo(LeftPanel)