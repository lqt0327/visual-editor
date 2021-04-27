import React, { useRef } from 'react';
import { Input } from 'antd';
import { Uploads, LinkAddress, EditableTagGroup } from "components";
import _ from 'lodash'

function NewPanel(props) {
    const {
        comp_i,
        pageData,
        template,
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
     
    const curried = _.curry(changeVal)
    
    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={tpl["title"]} defaultValue={tpl["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            <h3>标签</h3>
            <EditableTagGroup
                tagVal={tpl["tag"]}
                path={path}
                changeVal={changeVal}
            />
            {
                template === 'newlist3' ? 
                    <React.Fragment>
                        <h3>图片</h3>
                        <Uploads
                            imgHeight={56}
                            imgWidth={56}
                        />
                    </React.Fragment> : ""
            }
            <LinkAddress linkVal={tpl["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default React.memo(NewPanel);