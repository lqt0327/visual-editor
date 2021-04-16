import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types'
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
                    <a className="fd-link fd-subject">
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
        changePanelStateDispatch,
        template,
        left_editor,
        id,
        children,
        index
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }} id={id} data-index={index}>
            <Tabs defaultActiveKey="1" onChange={callback} centered onClick={() => {
                changePanelStateDispatch([left_editor,template],index)
            }}>
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

Tab.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.shape({
            img_address: PropTypes.string,
            title: PropTypes.string,
            link_address: PropTypes.string
        }))
    }))
}

Tab.defaultProps = {
    type: "text"
}
export default React.memo(Tab)