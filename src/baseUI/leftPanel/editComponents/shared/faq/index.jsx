import React, { useRef } from 'react';
import { Input } from 'antd';
import _ from 'lodash';
import CommonHoc from '../../common';

const { TextArea } = Input;

const FaqPanel = (props) => {
  const { 
    tpl,
    changeVal
  } = props

  const path = useRef([])

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

export default CommonHoc(React.memo(FaqPanel));