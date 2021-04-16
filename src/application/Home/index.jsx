import React from "react";
import { Header, Preview } from "baseUI";
import { AddComponents, LeftPanelPage, EditComponents } from "baseUI/leftPanel";
import { connect } from 'react-redux';
import "./style.sass";

// 事件代理 preview中点击 模块 左侧面板 响应

function Home(props) {

    const { panel: p, comp_i } = props
    const panel = p ? p.toJS() : []

    return (
        <div className="l-eidtor">
            <Header />
            <main>
                {
                    panel[0] === 'AddComponents' ? <AddComponents /> :
                    panel[0] === 'page' ? <LeftPanelPage /> : 
                    <EditComponents panel={panel[0]} comp_i={comp_i} template={panel[1]} />
                }
                <Preview />
            </main>
        </div>
    )
}

// 映射Redux全局的state到组件到props上

const mapStateToProps = (state) => ({
    comp_i: state.getIn(['panels','comp_i']),
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