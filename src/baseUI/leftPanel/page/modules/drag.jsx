import React, {useState} from "react";
import cx from 'classnames'

function DragComponent(props) {
  const { index, tpl, setTpl } = props

  /* 列表拖拽 */
  const [dragIndex, setDragIndex] = useState('')

  // const dragenter = (e, i) =>{
  //   e.preventDefault()
  //   const tplData = [...tpl]
  //   const moving = tplData[dragIndex]
  //   // tplData.splice(dragIndex, 1)
  //   // tplData.splice(i, 0, moving)
  //   tpl.splice(dragIndex, 1)
  //   tpl.splice(i, 0, moving)
  //   console.log(tpl,'===aaaa',dragIndex)
  //   setDragIndex(i)
  //   // setTpl(tplData)
  // }

  const dragenter = (e, i) =>{
    e.preventDefault()
    const moving = tpl[dragIndex]
    tpl.splice(dragIndex, 1)
    tpl.splice(i, 0, moving)
    setDragIndex(i)
  }

  const dragover = (e, i) => {
    e.preventDefault()
  }

  const dragstart = (i) => {
    setDragIndex(i)
  }
  /* 列表拖拽 */

  return (
    <div
      onDragEnter={(e)=>dragenter(e, index)}
      onDragOver={(e)=>dragover(e,index)}
      onDragStart={()=>dragstart(index)}
      draggable="true"
    >
      {props.children}
    </div>
  )
}

export default DragComponent;