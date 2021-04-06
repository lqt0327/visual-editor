import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Input } from 'antd';
import { Upload, LinkAddress, EditableTagGroup } from "components";
import { connect } from 'react-redux'
import { changePage } from 'store/actions'

const { Panel } = Collapse;

const NormalPanel = (props) => {
    const { 
        panel, 
        comp_i, 
        pageData, 
        changePageDataDispatch 
    } = props

    const tpl = pageData[comp_i]
    console.log(tpl,';;;;;;;',pageData)
    const tagsref = useRef()
    const [tags,setTags] = useState([])

    const [linkVal, setLinkVal] = useState('')
    const [textVal, setTextVal] = useState('')

    useEffect(()=>{
        if(tags.length !== 0) {
            console.log('tetttt')
            tpl["tag"] = tags
            changePageDataDispatch(pageData)
        }
    },[tags])
    
    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input defaultValue={`为什么`} />
            <h3>标签</h3>
            <EditableTagGroup
                ref={tagsref}
                setTags={setTags}
                tags={tpl["tag"]}
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
    const { 
        panel, 
        comp_i, 
        pageData:page, 
        changePageDataDispatch 
    } = props

    const tpldata = JSON.parse(localStorage.getItem('tpldata'))
    let pageData = page.size !== 0 ? page.toJS() :
        tpldata ? tpldata :  []

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
                                        comp_i={comp_i} 
                                        pageData={pageData}
                                        changePageDataDispatch={changePageDataDispatch}
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
// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    pageData: state.getIn(['page','pageData'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePageDataDispatch(data) {
            dispatch(changePage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListPanel));