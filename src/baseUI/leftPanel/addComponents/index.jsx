import React, { useState } from "react";
import { Tabs } from 'antd';
import GeneralTemplate from './generalTemplate'
import './style.sass'
import data from './data.json'

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
                        <Tabs tabPosition="left" defaultActiveKey="1" onChange={callback} size="small">
                            {
                                // console.log(Object.values(data),"[][][][][][]")
                                Object.keys(data).map((item,i)=>{
                                    return (
                                        <TabPane tab={item} key={i}>
                                            <GeneralTemplate 
                                                imgs={data[item]}
                                            />
                                        </TabPane>
                                    )
                                })
                            }
                            {/* <TabPane tab="BANNER" key="1">
                                <GeneralTemplate
                                    // imgs={}
                                />
                            </TabPane>
                            <TabPane tab="TAB" key="2">
                            Content of Tab Pane 2
                            </TabPane> */}
                            {/* <TabPane tab="列表" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="标题" key="4">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="引言" key="5">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="配图" key="6">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="段落" key="7">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="按钮" key="8">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="FAQ" key="9">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="规则" key="10">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="页脚" key="11">
                            Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="步骤" key="12">
                            Content of Tab Pane 3
                            </TabPane> */}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}

export default React.memo(AddComponents);