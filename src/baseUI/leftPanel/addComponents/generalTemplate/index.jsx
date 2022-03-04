import React from "react"
import { connect } from 'react-redux'
import { addTemplate } from 'store/actions'
import "./style.sass"

function GeneralTemplate(props) {

  const { list, addTemplateDispatch } = props

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GeneralTemplate))