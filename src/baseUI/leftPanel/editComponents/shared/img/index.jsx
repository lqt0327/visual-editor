import React, { useRef } from 'react';
import { Input } from 'antd';
import { Upload, LinkAddress } from "components";
import _ from 'lodash'

const ImgPanel = (props) => {
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
            {
                template === 'img2' ? 
                <React.Fragment>
                    <h3>描述</h3>
                    <Input defaultValue={tpl["desc"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "desc"), 250)} />
                </React.Fragment> : ""
            }
            <h3>图片</h3>
            <Upload
                imgHeight={56}
                imgWidth={56}
            />
            <LinkAddress linkVal={tpl["link_address"]} path={path} changeVal={changeVal} />
        </div>
    )
}

export default React.memo(ImgPanel);