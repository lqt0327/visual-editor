import React, { useCallback, useEffect, useState } from "react";
import { Header, LeftPanelPage, Preview, LeftPanelBanner } from "baseUI";
import * as components from "components";
import { connect } from 'react-redux';
import cx from "classnames";
import "./style.sass";

// 事件代理 preview中点击 模块 左侧面板 响应

function Home(props) {

    const { panel } = props
    const [arr,setArr] = useState([components.Header,components.LouCengBiaoTi,components.LouCengJianGe,components.LinkAddress,components.Upload,components.Carousel])

    return (
        <div className="l-eidtor">
            <Header />
            <main>
                {
                    panel === 'page' ? <LeftPanelPage /> : <LeftPanelBanner />
                }
                <Preview
                    arr={arr}
                />
            </main>
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Home));