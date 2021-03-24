import React, { useState } from 'react';
import { Collapse, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress} from "components";
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

const EditorContainer3 = () => {
    return (
        <div className="schema-editor-container">
            <Collapse accordion>
                {
                    new Array(2).fill(null).map((_,i)=>{
                        return (
                            <Panel header={`${i+1}.第 ${i+1} 页`} key={i} extra={genExtra()}>
                                <h3>别名</h3>
                                <Input placeholder={`第 ${i+1} 页`} />
                                <h3>每页配置</h3>
                                <Collapse accordion>
                                    {
                                        new Array(4).fill(null).map((_,j)=>{
                                            return (
                                                <Panel header={`${j+1}.测试数据`} key={j} extra={genExtra()}>
                                                    <h3>文案</h3>
                                                    <Input defaultValue={`${j+1}.测试数据`} />
                                                    <h3>图片</h3>
                                                    <Upload
                                                        imgHeight={56}
                                                        imgWidth={56}
                                                    />
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

const EditorContainer2 = () => {
    return (
        <div className="schema-editor-container">
            <Collapse accordion>
                {
                    new Array(4).fill(null).map((_,i)=>{
                        return (
                            <Panel header={`Tab ${i+1}`} key={i} extra={genExtra()}>
                                <h3>文案</h3>
                                <Input defaultValue={`${i+1}.为什么`} />
                                <h3>图片</h3>
                                <Upload
                                    imgHeight={56}
                                    imgWidth={56}
                                />
                                <LinkAddress />
                            </Panel>
                        )
                    })
                }
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

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
                                                    <Upload
                                                        imgHeight={144}
                                                        imgWidth={220}
                                                    />
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

function TabPanel(props) {

    const { panel } = props

    return (
        <React.Fragment>
            <div className="l-panel" style={{ width: "490px" }}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Tab</h2>
                            <div className="schema-editor-scroll">
                                {
                                    panel === 'tab1' ? <EditorContainer /> :
                                    panel === 'tab2' ? <EditorContainer2 /> :
                                    ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{ width: "490px" }}></div>
        </React.Fragment>
    )
}


export default React.memo(TabPanel)