import React, { useState } from "react"
import { connect } from 'react-redux'
import { addTemplate } from 'store/actions'
import "./style.sass"

function GeneralTemplate(props) {

    const { imgs, template, addTemplateDispatch } = props

    console.log(template,'testlqtlqt')

    return (
        <div>
            <div className="l-resource-item">
                <div className="smooth-dnd-container vertical">
                    {
                        imgs.map((item,i)=>{
                            return (
                            <div className="ser-module-item smooth-dnd-draggable-wrapper" key={i} onClick={()=>{console.log(item[2],'test++++------');addTemplateDispatch(item[2])}}>
                                    <div>
                                        <span className="ser-module-item-image">
                                            <img width="280" src={item[0]} alt=""/>
                                        </span>
                                        <span className="ser-module-item-title">{item[1]}</span>
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