import React, { useState } from "react";
import BannerStatic from './bannerStatic';
import BannerDynamic from './bannerDynamic';
import './style.sass'

// 根据传入 参数 判断 使用 折叠面板 ｜ 直接展示 ？

function LeftPanelBanner(props) {
    const {panel,comp_i} = props
    console.log(props,'leftBanner')
    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Banner</h2>
                            <div className="schema-editor-scroll">
                                {
                                    panel === 'carousel2' && <BannerDynamic
                                    comp_i={comp_i}
                                    />
                                }
                                {
                                    panel === 'banner1' && <BannerStatic
                                    comp_i={comp_i}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}

export default React.memo(LeftPanelBanner)