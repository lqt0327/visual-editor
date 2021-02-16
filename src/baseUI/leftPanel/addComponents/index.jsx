import React, { useState } from "react";
import { Tabs } from 'antd';
import './style.sass'

const { TabPane } = Tabs

function callback(key) {
    console.log(key);
}

function AddComponents() {
    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-resource">
                    <h3>添加组件</h3>
                    <div className="l-resource-list">
                        <Tabs tabPosition="left" defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}

export default React.memo(AddComponents);