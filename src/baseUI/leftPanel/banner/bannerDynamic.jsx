import React, { useState, useRef, useEffect } from 'react';
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress } from "components";

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

function BannerDynamic(props) {
    const {comp_i} = props
    const tpldata = JSON.parse(localStorage.getItem('tpldata'))

    const [linkVal, setLinkVal] = useState('')
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
    },[linkVal])
        
    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(key)=>{
                path.current = [key]
            }}>
                {
                    tpldata[comp_i].children.map((_,i)=>{
                        return (
                            <Panel header={`This is panel header ${i+1}`} key={i} extra={genExtra()}>
                                <Upload 
                                    imgWidth={750}
                                    imgHeight={280}
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

export default BannerDynamic;