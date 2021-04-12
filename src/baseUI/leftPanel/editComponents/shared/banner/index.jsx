import React, { useRef } from 'react';
import { Upload, LinkAddress } from "components";

function BannerPanel(props) {
    const { 
        comp_i,
        pageData,
        changePageDataDispatch 
    } = props
    console.log(changePageDataDispatch,'????xxxx')

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
            <Upload 
                imgWidth={750}
                imgHeight={280}
            />
            <LinkAddress linkVal={tpl["link_address"]} path={path} changeVal={changeVal} />
        </div>
    )
}

export default React.memo(BannerPanel);