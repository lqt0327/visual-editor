import React, { useState } from "react";
import * as components from "components";
import { connect } from 'react-redux'
// import { changePanel } from 'store/actions'
import BannerStatic from './bannerStatic';
import BannerDynamic from './bannerDynamic';
import './style.sass'

// 根据传入 参数 判断 使用 折叠面板 ｜ 直接展示 ？

function LeftPanelBanner(props) {
    console.log(props,'leftbanner')
    const {panel} = props
    const [list, setList] = useState([components.Upload,components.LinkAddress])
    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Banner</h2>
                            <div className="schema-editor-scroll">
                                {
                                    panel === 'bannerDynamic' && <BannerDynamic list={list}/>
                                }
                                {
                                    panel === 'bannerStatic' && <BannerStatic list={list}/>
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

// 映射Redux全局的state到组件到props上

const mapStateToProps = (state) => ({
    panel: state.getIn(['panels', 'currentPanel'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        // getPreviewDataDispatch(data) {
        //     dispatch(changePanel(data))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LeftPanelBanner))