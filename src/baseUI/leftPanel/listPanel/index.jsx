import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Input } from 'antd';
import { Upload, LinkAddress, EditableTagGroup } from "components";

const { Panel } = Collapse;

const NormalPanel = (props) => {
    const { panel } = props
    // console.log(panel,'listpanel-panel')
    const tagsref = useRef()
    const [tags,setTags] = useState([])
    useEffect(()=>{
        tagsref.current && setTags(tagsref.current.state.tags)
        // console.log(tagsref,'测试数据')
        return ()=>{
            // console.log(tags,'离开组建时')
        }
    },[tags])
    
    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input defaultValue={`为什么`} />
            <h3>标签</h3>
            <EditableTagGroup
                ref={tagsref}
            />
            <p>{tags}</p>
            <h3>图片</h3>
            <Upload
                imgHeight={56}
                imgWidth={56}
            />
            <LinkAddress />
        </div>
    )
}

function ListPanel(props) {
    const { panel } = props

    return (
        <React.Fragment>
            <div className="l-panel" style={{ width: "490px" }}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>List</h2>
                            <div className="schema-editor-scroll">
                                {
                                    panel.indexOf("normal") !== -1 ? 
                                    <NormalPanel 
                                        panel={panel}
                                    /> : ""
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

export default ListPanel;