import React, { useRef, useState, useEffect } from 'react';
import { Input } from 'antd';
import _ from 'lodash'
import CommonHoc from '../../common';
import ColorSelect from '../../../../../components/color-select';

const TitlePanel = (props) => {
  const { 
    tpl,
    changeVal
  } = props

  const path = useRef([])
  const [color, setColor] = useState("#aabbcc");

  useEffect(()=>{
    console.log(color,'???======')
    changeVal(path.current, color, "color")
  },[color])

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input 
              key={tpl["title"]} 
              defaultValue={tpl["title"]} 
              onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} 
            />
            <h3>样式</h3>
            <div className="editor-container-wrapper">
              <ColorSelect updateColor={setColor} color={color} />
            </div>
        </div>
    )
}

export default CommonHoc(React.memo(TitlePanel));