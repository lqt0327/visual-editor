import React, { useRef } from 'react';
import { Input } from 'antd';
import _ from 'lodash'

const { TextArea } = Input;

const FaqPanel = (props) => {
    const {
        comp_i,
        pageData,
        template,
        changePageDataDispatch
    } = props

    const path = useRef([])
    const tpl = pageData[comp_i]

    const tplData = (path) => {
        if (path.length !== 0) {
            return path.reduce((pre, cur) => {
                if (pre !== 0) {
                    return pre.children[cur]
                }
                return tpl.children[cur]
            }, 0)
        } else {
            return tpl
        }
    }

    const changeVal = (path, newVal, type) => {
        const tmp = tplData(path)
        tmp[type] = newVal
        changePageDataDispatch(pageData)
    }

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={tpl["title"]} defaultValue={tpl["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            <h3>描述</h3>
            <TextArea 
            key={tpl["content"]}
            defaultValue={tpl["content"]} 
            onChange={_.debounce((e) => changeVal(path.current, e.target.value, "content"), 250)} 
            rows={4}
            />
        </div>
    )
}

export default React.memo(FaqPanel);