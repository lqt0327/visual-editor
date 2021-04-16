import React from 'react';
import { Tabs } from 'antd';
import './style.sass';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const CompList = (arr) => {
    return (
        arr.map((item2, j) => {
            return (
                <div key={j}>
                    <a href={item2["link_address"]} className="fd-link fd-subject">
                        <div className="fd-subject-cover" style={{ backgroundImage: 'url(' + item2["img_address"] + ')' }}></div>
                        <div className="fd-subject-content">
                            <h1 className="fd-title line-cut-2">{item2["title"]}</h1>
                        </div>
                    </a>
                </div>
            )
        })
    )
}

function Tab(props) {

    const {
        children
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }}>
            <Tabs defaultActiveKey="1" onChange={callback} centered>
                {
                    children.map((item, i) => {
                        return (
                            <TabPane tab={item["label"]} key={i + 1}>
                                {
                                    CompList(item["children"])
                                }
                            </TabPane>
                        )
                    })
                }
            </Tabs>
        </div>

    )
}

export default React.memo(Tab)