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

  const { content, style } = tpl

  const path = useRef([])
  // 页面只初始化了一次，所以style.color变更了，并不会给color重新赋值，需要手动监听赋值
  const [color, setColor] = useState(style.color);
  const [iconColor, setIconColor] = useState(style.iconColor);

  /**
   * 解决切换组件，左侧编辑面板中颜色不更新问题
   */
  useEffect(()=>{
    setColor(style.color)
    setIconColor(style.iconColor)
  },[style])

  useEffect(()=>{
    changeColor(path.current, color)
  },[color])

  const changeTitle = (path, val) => {
    changeVal(path, val, "content")
  }

  const changeColor = (path, color) => {
    const style = {
      color,
      iconColor
    }
    changeVal(path, style, "style")
  }

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input 
              key={content} 
              defaultValue={content} 
              onChange={_.debounce((e) => changeTitle(path.current, e.target.value), 250)} 
            />
            <h3>样式</h3>
            <div className="editor-container-wrapper">
              {
                color && <ColorSelect updateColor={setColor} color={color} title="文字颜色"/>
              }
              {
                iconColor && <ColorSelect updateColor={setIconColor} color={iconColor} title="图标颜色" />
              }
            </div>
        </div>
    )
}

export default CommonHoc(React.memo(TitlePanel));