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

    // const _deep = (tpldata,i) => {
    //     tpldata[i]
    // }

    const link_ref = useRef()
        console.log(link_ref,'??????')

    return (
        <div className="schema-editor-container">
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                    {
                        // tpldata[comp_i].children[1] .img_address or .link_address
                    }
                    <Upload 
                        imgWidth={750}
                        imgHeight={280}
                    />
                    <LinkAddress ref={link_ref} />
                </Panel>
                <Panel header="This is panel header 2" key="2" extra={genExtra()}>
                    <Upload 
                        imgWidth={750}
                        imgHeight={280}
                    />
                    <LinkAddress />
                </Panel>
                <Panel header="This is panel header 3" key="3" extra={genExtra()}>
                    <Upload 
                        imgWidth={750}
                        imgHeight={280}
                    />
                    <LinkAddress />
                </Panel>
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

export default BannerDynamic;