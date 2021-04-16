import React from "react";
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
                        <Tabs tabPosition="left" defaultActiveKey="0" onChange={callback} size="small">
                            {
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
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}

export default React.memo(AddComponents);