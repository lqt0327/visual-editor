import React, { useRef } from 'react';
import { Input } from 'antd';
import { Upload, LinkAddress } from "components";
import _ from 'lodash'

const CardPanel = (props) => {
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

    const curried = _.curry(changeVal)

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={tpl["title"]} defaultValue={tpl["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            <h3>副标题</h3>
            <Input key={tpl["subtitle"]} defaultValue={tpl["subtitle"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "subtitle"), 250)} />
            <h3>标签</h3>
            <Input key={tpl["tag"]} defaultValue={tpl["tag"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "tag"), 250)} />
            <h3>图片</h3>
            <Upload
                imgHeight={320}
                imgWidth={686}
                changeVal={curried(path.current)}
            />
            <LinkAddress linkVal={tpl["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default React.memo(CardPanel);