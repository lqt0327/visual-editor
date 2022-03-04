import React, { useRef } from 'react';
import { Input } from 'antd';
import { LinkAddress } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

const ButtonPanel = (props) => {
  const { 
    curried, 
    tpl,
    changeVal
  } = props

  const { content } = tpl

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <h3>按钮文字</h3>
            <Input key={content["text"]} defaultValue={content["text"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "text"), 250)} />
            <LinkAddress linkVal={content["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(ButtonPanel));