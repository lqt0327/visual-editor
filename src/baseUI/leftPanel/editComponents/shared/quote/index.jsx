import React, { useRef } from 'react';
import { Input } from 'antd';
import _ from 'lodash'
import CommonHoc from '../../common';

const { TextArea } = Input;

const QutoePanel = (props) => {
  const { 
    tpl,
    changeVal
  } = props

  const { content } = tpl

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <h3>描述</h3>
            <TextArea 
            key={content["text"]}
            defaultValue={content["text"]} 
            onChange={_.debounce((e) => changeVal(path.current, e.target.value, "text"), 250)} 
            rows={4}
            />
        </div>
    )
}

export default CommonHoc(React.memo(QutoePanel));