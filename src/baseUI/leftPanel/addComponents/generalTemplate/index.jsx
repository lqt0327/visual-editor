import React from "react"
import { connect } from 'react-redux'
import { addTemplate, setShowAdd } from 'store/actions'
import "./style.sass"

function GeneralTemplate(props) {

  const { list, addTemplateDispatch, setShowAddDispatch } = props
  console.log(list,'???0000')

  /**
   * 传递数据给放置区域
   * @param {*} e 
   * @param {*} data -组件数据
   */
  const dragStart = (e, data) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(data))
  }

  /**
   * 松开拖动元素，预览区域的放置框隐藏
   * @param {*} e 
   */
  const dragEnd = (e) => {
    setShowAddDispatch('')
  }

  return (
    <div>
      <div className="l-resource-item">
        <div className="smooth-dnd-container vertical">
          {
            list.map((item, i) => {
              return (
                <div 
                  className="ser-module-item smooth-dnd-draggable-wrapper" 
                  key={i} 
                  onClick={() => { addTemplateDispatch(item) }}
                  onDragStart={(e) => dragStart(e, item)}
                  onDragEnd={(e) => dragEnd(e)}
                  draggable
                >
                  <div>
                    <span className="ser-module-item-image">
                      <img width="280" src={item.extends.img} alt="" />
                    </span>
                    <span className="ser-module-item-title">{item.extends.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
  panel: state.getIn(['panels', 'currentPanel']),
  template: state.getIn(['template', 'currentTemplate'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    addTemplateDispatch(data) {
      dispatch(addTemplate(data))
    },
    setShowAddDispatch(data) {
      dispatch(setShowAdd(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GeneralTemplate))