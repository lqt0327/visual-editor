import React, { useState, useRef, useEffect } from 'react';
import { Collapse, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress } from "components";
import { connect } from 'react-redux'
import { changePage } from 'store/actions'
import _ from 'lodash'
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

const EditorContainer3 = () => {
    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(e) => {
                console.log(e, 'tabpanel')
            }}>
                {
                    new Array(2).fill(null).map((_, i) => {
                        return (
                            <Panel header={`${i + 1}.第 ${i + 1} 页`} key={i} extra={genExtra()}>
                                <h3>别名</h3>
                                <Input placeholder={`第 ${i + 1} 页`} />
                                <h3>每页配置</h3>
                                <Collapse accordion>
                                    {
                                        new Array(4).fill(null).map((_, j) => {
                                            return (
                                                <Panel header={`${j + 1}.测试数据`} key={j} extra={genExtra()}>
                                                    <h3>文案</h3>
                                                    <Input defaultValue={`${j + 1}.测试数据`} />
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

const EditorContainer2 = (props) => {
    const { 
        comp_i, 
        pageData, 
        changePageDataDispatch 
    } = props

    const tpl = pageData[comp_i]

    const [linkVal, setLinkVal] = useState('')
    const [textVal, setTextVal] = useState('')
    const path = useRef([])

    useEffect(()=>{
        const tmp = path.current.reduce((pre,cur)=>{
            return tpl.children[cur]
        },0)
        if(linkVal !== '') {
            tmp["link_address"] = linkVal
            changePageDataDispatch(pageData)
        }
        if(textVal !== '') {
            tmp["label"] = textVal
            changePageDataDispatch(pageData)
        }
    },[linkVal,textVal])

    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(e) => {
                path.current = [e]
            }}>
                {
                    pageData[comp_i].children.map((item, i) => {
                        return (
                            <Panel header={`Tab ${i + 1}`} key={i} extra={genExtra()}>
                                <h3>文案</h3>
                                <Input defaultValue={`${i + 1}.为什么`} onChange={_.debounce((e)=>setTextVal(e.target.value),250)} />
                                <h3>图片</h3>
                                <Upload
                                    imgHeight={56}
                                    imgWidth={56}
                                />
                                <LinkAddress linkVal={tpl.children[i]["link_address"]} setLinkVal={setLinkVal} />
                            </Panel>
                        )
                    })
                }
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

const EditorContainer = (props) => {
    const { 
        comp_i, 
        pageData, 
        changePageDataDispatch 
    } = props

    const [linkVal, setLinkVal] = useState('')
    const [tagVal, setTagVal] = useState('')
    const [titleVal, setTitleVal] = useState('')

    const path = useRef([])
    const tpl = pageData[comp_i]

    useEffect(()=>{
        const tmp = path.current.reduce((pre,cur)=>{
            if(pre !== 0) {
                return pre.children[cur]
            }
            return tpl.children[cur]
        },0)
        console.log(linkVal,tagVal,titleVal,'测试数据val')
        if(linkVal !== '') {
            console.log('测试数据val1')
            tmp["link_address"] = linkVal
            changePageDataDispatch(pageData)
        }
        if(tagVal !== '') {
            console.log('测试数据val2')
            tmp["label"] = tagVal
            changePageDataDispatch(pageData)
        }
        if(titleVal !== '') {
            console.log('测试数据val3')
            tmp["title"] = titleVal
            changePageDataDispatch(pageData)
        }
    },[linkVal,tagVal,titleVal])
    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(e) => {
                path.current = [e]
            }}>
                {
                    tpl.children.map((item, i) => {
                        return (
                            <Panel header={item["label"]} key={i} extra={genExtra()}>
                                <h3>标签</h3>
                                <Input defaultValue={item["label"]} onChange={_.debounce((e)=>setTagVal(e.target.value),250)} />
                                <h3>内容</h3>
                                <Collapse accordion onChange={(j)=>{
                                    path.current = [i,j]
                                }}>
                                    {
                                        item.children.map((item2, j) => {
                                            return (
                                                <Panel header={item2["title"]} key={j} extra={genExtra()}>
                                                    <h3>标题</h3>
                                                    <Input defaultValue={item2["title"]} onChange={_.debounce((e)=>setTitleVal(e.target.value),250)} />
                                                    <h3>封面</h3>
                                                    <Upload
                                                        imgHeight={144}
                                                        imgWidth={220}
                                                    />
                                                    <LinkAddress setLinkVal={setLinkVal} />
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

    const { 
        panel, 
        comp_i, 
        pageData:page, 
        changePageDataDispatch 
    } = props

    const tpldata = JSON.parse(localStorage.getItem('tpldata'))
    console.log(tpldata,'测试数据')
    let pageData = page.size !== 0 ? page.toJS() :
        tpldata ? tpldata :  []

    return (
        <React.Fragment>
            <div className="l-panel" style={{ width: "490px" }}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Tab</h2>
                            <div className="schema-editor-scroll">
                                {
                                    panel === 'tab1' ? 
                                    <EditorContainer 
                                    comp_i={comp_i} 
                                    pageData={pageData}
                                    changePageDataDispatch={changePageDataDispatch}
                                    /> :
                                        panel === 'tab2' ? 
                                        <EditorContainer2 
                                        comp_i={comp_i} 
                                        pageData={pageData}
                                        changePageDataDispatch={changePageDataDispatch}
                                        /> :
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TabPanel))