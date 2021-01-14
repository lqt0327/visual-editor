import React, { useState } from "react";
import * as components from "components";
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './style.sass'

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

// 根据传入 参数 判断 使用 折叠面板 ｜ 直接展示 ？

function LeftPanelBanner() {
    const [list, setList] = useState([components.Upload,components.LinkAddress])
    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Banner</h2>
                            <div className="schema-editor-scroll">
                                <div className="schema-editor-container">
                                    {/* {
                                        list.map((item)=>{
                                            return item()
                                        })
                                    } */}
                                    <Collapse accordion>
                                        <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                                            {
                                                list.map((item,i)=>{
                                                    return (
                                                        <div key={i}>{item()}</div>
                                                    )
                                                })
                                            }
                                        </Panel>
                                        <Panel header="This is panel header 2" key="2" extra={genExtra()}>
                                            {
                                                list.map((item,i)=>{
                                                    return (
                                                        <div key={i}>{item()}</div>
                                                    )
                                                })
                                            }
                                        </Panel>
                                        <Panel header="This is panel header 3" key="3" extra={genExtra()}>
                                            {
                                                list.map((item,i)=>{
                                                    return (
                                                        <div key={i}>{item()}</div>
                                                    )
                                                })
                                            }
                                        </Panel>
                                    </Collapse>
                                    <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
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

export default React.memo(LeftPanelBanner)