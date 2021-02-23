import React, { useState } from 'react';
import { Collapse, Input } from 'antd';
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
                {
                    new Array(4).fill(null).map((_,i)=>{
                        return (
                            <Panel header={`Tab ${i+1}`} key={i} extra={genExtra()}>
                                <h3>标签</h3>
                                <Input placeholder="Tab 1" />
                                <h3>内容</h3>
                                <Collapse accordion>
                                    {
                                        new Array(2).fill(null).map((_,j)=>{
                                            return (
                                                <Panel header={`${j+1}.为什么`} key={j} extra={genExtra()}>
                                                    <h3>标题</h3>
                                                    <Input defaultValue={`${j+1}.为什么`} />
                                                    <h3>封面</h3>
                                                    <Upload />
                                                    <LinkAddress />
                                                </Panel>
                                            )
                                        })
                                    }
                                </Collapse>
                                <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
                            </Panel>
                        )
                    })
                }
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