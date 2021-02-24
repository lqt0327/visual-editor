import React from 'react';
import { Tabs } from 'antd';
import './style.sass';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

function Tab(props) {

    const { changePanelStateDispatch } = props

    return (
        <Tabs defaultActiveKey="1" onChange={callback} onClick={()=>{changePanelStateDispatch(['tab','normal'])}}>
            {
                new Array(4).fill(null).map((_,i)=>{
                    return (
                        <TabPane tab={`Tab ${i+1}`} key={i+1}>
                            <div>
                                <a className="fd-link fd-subject">
                                    <div className="fd-subject-cover" style={{backgroundImage:'url("https://gw.alipayobjects.com/zos/rmsportal/ebuQSFOLCrYqpCHmfxll.png")'}}></div>
                                    <div className="fd-subject-content">
                                        <h1 className="fd-title line-cut-2">为什么这么多大企业都是云凤蝶的忠实用户？</h1>
                                    </div>
                                </a>
                                <a className="fd-link fd-subject">
                                    <div className="fd-subject-cover" style={{backgroundImage:'url("https://gw.alipayobjects.com/zos/rmsportal/ebuQSFOLCrYqpCHmfxll.png")'}}></div>
                                    <div className="fd-subject-content">
                                        <h1 className="fd-title line-cut-2">为什么这么多大企业都是云凤蝶的忠实用户？</h1>
                                    </div>
                                </a>
                            </div>
                        </TabPane>
                    )
                })
            }
        </Tabs>
    )
}

export default React.memo(Tab)