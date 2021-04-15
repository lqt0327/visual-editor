import React from "react";
import { connect } from 'react-redux'
import * as shared from './shared'
import { changePage } from 'store/actions'
import _ from 'lodash'
import './style.sass'

// 根据传入 参数 判断 使用 折叠面板 ｜ 直接展示 ？

function EditComponents(props) {
    const {
        panel,
        comp_i,
        pageData:page, 
        template,
        pid,
        changePageDataDispatch 
    } = props

    const tpldata = JSON.parse(localStorage.getItem(`tpl_${pid}`))
    let pageData = page.size !== 0 ? page.toJS() :
        tpldata ? tpldata :  []
    const tpl = pageData[comp_i]

    const changePageData = _.curry(changePageDataDispatch)

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
                                        changePageDataDispatch: changePageData(pid)
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
    pid: state.getIn(['page', 'pid']),
    pageData: state.getIn(['page','pageData'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePageDataDispatch(id,data) {
            localStorage.setItem(`tpl_${id}`,JSON.stringify(data))
            dispatch(changePage(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(EditComponents))