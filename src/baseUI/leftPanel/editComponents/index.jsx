import React from "react";
import { connect } from 'react-redux'
import * as shared from './shared'
import { changePage } from 'store/actions'
import './style.sass'

// 根据传入 参数 判断 使用 折叠面板 ｜ 直接展示 ？

function EditComponents(props) {
    const {
        panel,
        comp_i,
        pageData:page, 
        template,
        changePageDataDispatch 
    } = props

    const tpldata = JSON.parse(localStorage.getItem('tpldata'))
    let pageData = page.size !== 0 ? page.toJS() :
        tpldata ? tpldata :  []
    const tpl = pageData[comp_i]

    console.log(tpl,'000000',props,shared[panel])

    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>{tpl["comp"]}</h2>
                            <div className="schema-editor-scroll">
                                {
                                    React.createElement(shared[panel],{
                                        comp_i: comp_i,
                                        pageData: pageData,
                                        template: template,
                                        changePageDataDispatch: changePageDataDispatch
                                    },'')
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}
// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    pageData: state.getIn(['page','pageData'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePageDataDispatch(data) {
            localStorage.setItem('tpldata',JSON.stringify(data))
            dispatch(changePage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(EditComponents))