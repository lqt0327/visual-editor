import React, { useRef } from 'react';
import { Input } from 'antd';
import _ from 'lodash'
import CommonHoc from '../../common';

const TitlePanel = (props) => {
  const { 
    tpl,
    changeVal
  } = props

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={tpl["title"]} defaultValue={tpl["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
        </div>
    )
}

export default CommonHoc(React.memo(TitlePanel));