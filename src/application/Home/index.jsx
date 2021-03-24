import React, { useCallback, useEffect, useState } from "react";
import { Header, Preview } from "baseUI";
import * as LeftPanel from "baseUI/leftPanel";
import { connect } from 'react-redux';
import cx from "classnames";
import "./style.sass";

// 事件代理 preview中点击 模块 左侧面板 响应

function Home(props) {

    const { panel } = props

    console.log(panel, '????????')
    return (
        <div className="l-eidtor">
            <Header />
            <main>
                {
                    // panel[0] === 'addComponents' ? <AddComponents /> :
                    // panel[0] === 'page' ? <LeftPanelPage /> :
                    // panel[0] === 'banner' ? <LeftPanelBanner /> :
                    // panel[0] === 'tab' ? <TabPanel /> :
                    // <LeftPanelPage />
                    panel[0] ? React.createElement(LeftPanel[panel[0]],{panel: panel[1]},'') :
                    <LeftPanel.LeftPanelPage />
                }
                <Preview />
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