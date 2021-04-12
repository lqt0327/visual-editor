import React, { useEffect, useRef, useState } from "react";
import { getAllTplRequest, addTplRequest } from 'src/api/request'
import { connect } from 'react-redux'
import { changePid, changePageTitle } from "src/store/actions";
import cx from 'classnames'
import { Input } from 'antd'
import './style.sass'

function LeftPanel(props) {
    const {
        pid,
        changePidStateDispatch,
        changePageTitleStateDispatch
    } = props

    const safeRef = useRef(false)
    const [tpl,setTpl] = useState([])

    /**
     * @description 定义安全函数 防止内存泄漏问题
     * @param {string} data -接口返回的数据
     */
    const safeSetTplData = (data) => safeRef.current && setTpl(data)

    const getAllTplData = () => {
        getAllTplRequest().then(res=>{
            for(let v of res) {
                if(!localStorage.getItem(`tpl_${v.id}`)) {
                    localStorage.setItem(`tpl_${v.id}`,v.tplData)
                }
            }
            safeSetTplData(res)
        })
    }

    /**
     * 只需要执行一次 接口数据的请求
     */
    useEffect(()=>{
        getAllTplData()
    },[])

    useEffect(()=>{
        safeRef.current = true
        return ()=>{
            safeRef.current = false
        }
    })

    const [add, setAdd] = useState(false)

    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"336px"}}>
                <div className="l-panel-container">
                    <h3>页面列表<i className="icon iconfont">&#xe75e;</i></h3>
                    <div className="l-panel-list">
                        {
                            tpl.length !== 0 && tpl.map((item,i)=>{
                                return (
                                    <div 
                                    className={cx("l-panel-item", {"l-panel-item-active": pid === item["id"]})} 
                                    onClick={()=>{
                                        changePidStateDispatch(item["id"])
                                        changePageTitleStateDispatch(item["title"])
                                    }}
                                    key={i}
                                    >
                                        <div className="l-panel-item__drag"></div>
                                        <div className="l-panel-item__title">
                                            <h4>
                                                <span>{item["title"]}</span>
                                                {
                                                    item["homePage"] === 1 ? 
                                                    <em>首页</em> : ""
                                                }
                                            </h4>
                                            <span className="l-panel__title--path">{item["id"]}.html</span>
                                        </div>
                                        <i className="icon iconfont">&#xe7f5;</i>
                                    </div>
                                )
                            })
                        }
                        {
                            add ?
                            <div 
                            className="l-panel-item"
                            >
                                <div className="l-panel-item__drag"></div>
                                <div className="l-panel-item__title">
                                    <h4>
                                        <span>
                                            <Input size="small" onPressEnter={(e)=>{
                                                setAdd(false)
                                                // 创建一个空页面
                                                addTplRequest(JSON.stringify([]),1,1,e.target.value)
                                                .then(res=>{
                                                    changePidStateDispatch(res.id)
                                                    getAllTplData()
                                                })
                                            }} />    
                                        </span>
                                    </h4>
                                    <span className="l-panel__title--path">（自动生成）</span>
                                </div>
                                <i className="icon iconfont">&#xe7f5;</i>
                            </div> : ""
                        }
                    </div>
                    <div className="l-panel-add" onClick={()=>setAdd(true)}>
                        <span><i className="icon iconfont">&#xe8a1;</i>添加页面</span>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"336px"}}></div>
        </React.Fragment>
    )
}
// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    pid: state.getIn(['page', 'pid'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePidStateDispatch(data) {
            dispatch(changePid(data))
        },
        changePageTitleStateDispatch(data) {
            dispatch(changePageTitle(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LeftPanel))