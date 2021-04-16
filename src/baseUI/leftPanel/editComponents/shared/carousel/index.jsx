import React, { useRef } from 'react';
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

function CarouselPanel(props) {
    const {
        comp_i,
        pageData,
        changePageDataDispatch
    } = props

    const path = useRef([])
    const tpl = pageData[comp_i]

    const tplData = (path) => {
        if(path.length !== 0) {
            return path.reduce((pre,cur)=>{
                if(pre !== 0) {
                    return pre.children[cur]
                }
                return tpl.children[cur]
            },0)
        }else {
            return tpl
        } 
    }

    const changeVal = (path,newVal,type) => {
        const tmp = tplData(path)
        tmp[type] = newVal
        changePageDataDispatch(pageData)
    }
        
    return (
        <div className="schema-editor-container">
            <Collapse accordion onChange={(key)=>{
                path.current = [key]
            }}>
                {
                    tpl.children.map((item,i)=>{
                        return (
                            <Panel header={`This is panel header ${i+1}`} key={i} extra={genExtra()}>
                                <Upload 
                                    imgWidth={750}
                                    imgHeight={280}
                                />
                                <LinkAddress linkVal={item["link_address"]} path={path} changeVal={changeVal} />
                            </Panel>
                        )
                    })
                }
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

export default React.memo(CarouselPanel);