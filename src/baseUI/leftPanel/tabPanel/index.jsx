import React, { useState, useRef, useEffect } from 'react';
import { Collapse, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress } from "components";
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
    const { comp_i } = props
    const tpldata = JSON.parse(localStorage.getItem('tpldata'))

    const [linkVal, setLinkVal] = useState('')
    const [textVal, setTextVal] = useState('')
    const path = useRef([])

    useEffect(()=>{
        const tpl = tpldata[comp_i]
        const tmp = path.current.reduce((pre,cur)=>{
            return tpl.children[cur]
        },0)
        if(linkVal !== '') {
            tmp["link_address"] = linkVal
            localStorage.setItem('tpldata',JSON.stringify(tpldata))
        }
        if(textVal !== '') {
            tmp["label"] = textVal
            localStorage.setItem('tpldata',JSON.stringify(tpldata))
        }
    },[linkVal,textVal])

    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(e) => {
                path.current = [e]
            }}>
                {
                    tpldata[comp_i].children.map((item, i) => {
                        return (
                            <Panel header={`Tab ${i + 1}`} key={i} extra={genExtra()}>
                                <h3>文案</h3>
                                <Input defaultValue={`${i + 1}.为什么`} onChange={_.debounce((e)=>setTextVal(e.target.value),250)} />
                                <h3>图片</h3>
                                <Upload
                                    imgHeight={56}
                                    imgWidth={56}
                                />
                                <LinkAddress setLinkVal={setLinkVal} />
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
    const { comp_i } = props
    const tpldata = JSON.parse(localStorage.getItem('tpldata'))

    const [linkVal, setLinkVal] = useState('')
    const [tagVal, setTagVal] = useState('')
    const [titleVal, setTitleVal] = useState('')

    const path = useRef([])

    useEffect(()=>{
        const tpl = tpldata[comp_i]
        const tmp = path.current.reduce((pre,cur)=>{
            console.log(pre,'prepre')
            if(pre !== 0) {
                return pre.children[cur]
            }
            return tpl.children[cur]
        },0)
        console.log(tmp,'xxxx')
        if(linkVal !== '') {
            tmp["link_address"] = linkVal
            localStorage.setItem('tpldata',JSON.stringify(tpldata))
        }
        if(tagVal !== '') {
            tmp["label"] = tagVal
            localStorage.setItem('tpldata',JSON.stringify(tpldata))
        }
        if(titleVal !== '') {
            tmp["title"] = titleVal
            localStorage.setItem('tpldata',JSON.stringify(tpldata))
        }
        console.log(tpldata,'))))))',path)
    },[linkVal,tagVal,titleVal])
    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(e) => {
                path.current = [e]
            }}>
                {
                    new Array(4).fill(null).map((item, i) => {
                        return (
                            <Panel header={`Tab ${i + 1}`} key={i} extra={genExtra()}>
                                <h3>标签</h3>
                                <Input placeholder="Tab 1" onChange={_.debounce((e)=>setTagVal(e.target.value),250)} />
                                <h3>内容</h3>
                                <Collapse accordion onChange={(j)=>{
                                    path.current = [i,j]
                                }}>
                                    {
                                        new Array(2).fill(null).map((item2, j) => {
                                            return (
                                                <Panel header={`${j + 1}.为什么`} key={j} extra={genExtra()}>
                                                    <h3>标题</h3>
                                                    <Input defaultValue={`${j + 1}.为什么`} onChange={_.debounce((e)=>setTitleVal(e.target.value),250)} />
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

    const { panel, comp_i } = props

    return (
        <React.Fragment>
            <div className="l-panel" style={{ width: "490px" }}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Tab</h2>
                            <div className="schema-editor-scroll">
                                {
                                    panel === 'tab1' ? <EditorContainer comp_i={comp_i} /> :
                                        panel === 'tab2' ? <EditorContainer2 comp_i={comp_i} /> :
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


export default React.memo(TabPanel)