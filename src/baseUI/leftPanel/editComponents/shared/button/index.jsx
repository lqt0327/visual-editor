import React, { useRef } from 'react';
import { Input } from 'antd';
import { LinkAddress } from "components";
import _ from 'lodash'

const ButtonPanel = (props) => {
    const {
        comp_i,
        pageData,
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
            <h3>按钮文字</h3>
            <Input defaultValue={tpl["text"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "text"), 250)} />
            <LinkAddress linkVal={tpl["link_address"]} path={path} changeVal={changeVal} />
        </div>
    )
}

export default React.memo(ButtonPanel);