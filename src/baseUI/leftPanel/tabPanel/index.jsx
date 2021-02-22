import React, { useState } from 'react';
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress} from "components";
import { connect } from 'react-redux'
import './style.sass'
import linkAddress from '../../../components/link_address';

const { Panel } = Collapse;

const genExtra = () => (
    <DeleteOutlined
        onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            // event.stopPropagation();
            console.log('delete')
        }}
    />
);

const EditorContainer = () => {
    return (
        <div className="schema-editor-container">
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                    <Upload />
                    <LinkAddress />
                </Panel>
                <Panel header="This is panel header 2" key="2" extra={genExtra()}>
                    <Upload />
                    <LinkAddress />
                </Panel>
                <Panel header="This is panel header 3" key="3" extra={genExtra()}>
                    <Upload />
                    <LinkAddress />
                </Panel>
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

function TabPanel() {
    return (
        <React.Fragment>
            <div className="l-panel" style={{ width: "490px" }}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Tab</h2>
                            <div className="schema-editor-scroll">
                                <EditorContainer  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{ width: "490px" }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TabPanel))