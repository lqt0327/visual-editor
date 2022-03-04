import React, { useState } from 'react'
import { HexColorPicker } from "react-colorful";
import './style.scss';

const ColorSelect = (props) => {
  const { updateColor, color, title } = props

  const [flag, setFlag] = useState(false)

  /**
   * 展示颜色选择器
   * @param {*} e 
   */
  const showColorEditor = (e) => {
    // 阻止冒泡
    e.nativeEvent.stopImmediatePropagation()
    setFlag(true)
  }

  /**
   * 点击空白区域关闭颜色选择器
   */
  document.addEventListener('click', () => {
    setFlag(false)
  })

  return (
    <div className="color-select">
      <span>{title}：</span>
      <div className="color-select-container" onClick={showColorEditor}>
        <span className='color-select-editor'>{color} <div style={{"backgroundColor": color}}></div> </span>
          {
            flag ?
            <HexColorPicker color={color} onChange={updateColor} className="color-picker" /> :
            ''
          } 
      </div>
    </div>
    
  )
}

export default ColorSelect