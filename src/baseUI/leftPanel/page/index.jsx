import React, { useEffect, useRef, useState } from "react";
import { getUserTplRequest, addTplRequest, deleteTplRequest, updateTplRequest } from 'src/api/request'
import { connect } from 'react-redux'
import { changePid, changePageTitle, changePage } from "src/store/actions";
import cx from 'classnames'
import { Input, Popover, Popconfirm, message } from 'antd'
import './style.sass'

function LeftPanel(props) {
    const {
        pid,
        pUpdate,
        changePageStateDispatch,
        changePageTitleDispatch
    } = props

    const safeRef = useRef(false)
    const [tpl, setTpl] = useState([])

    /**
     * @description 定义安全函数 防止内存泄漏问题
     * @param {string} data -接口返回的数据
     */
    const safeSetTplData = (data) => safeRef.current && setTpl(data)

    const getUserTplData = () => {
        getUserTplRequest().then(async (res) => {
            function wait(res) {
                for (let v of res) {
                    if(localStorage.getItem(`tpl_${v.id}`)) {
                        v["tplData"] = localStorage.getItem(`tpl_${v.id}`)
                    }
                }
            }
            await wait(res)
            safeSetTplData(res)
        })
    }

    /**
     * 只需要执行一次 接口数据的请求
     */
    useEffect(() => {
        getUserTplData()
    }, [pUpdate])

    useEffect(() => {
        document.onclick = ()=>{setUpdate(0)}
        safeRef.current = true
        return () => {
            safeRef.current = false
        }
    })

    // 添加页面  true-展示 false-隐藏
    const [add, setAdd] = useState(false)

    const [update, setUpdate] = useState(0)

    const content = () => {

        const pStyle = {
            textAlign: "center",
            cursor:"pointer"
        }

        const text = '你确定要删除这个页面吗?';
        async function confirm(pid) {
            await deleteTplRequest(pid).then(res=>{
                message.info(res);
                localStorage.removeItem(`tpl_${pid}`)
                getUserTplData()
            })
            changePageStateDispatch([],0,'')
        }
        return (
        <div>
            <Popconfirm
                placement="rightTop"
                title={text}
                onConfirm={()=>confirm(pid)}
                okText="Yes"
                cancelText="No"
            >
                <p style={pStyle}>删除</p>
            </Popconfirm>
            <hr />
            <p style={pStyle} onClick={()=>setUpdate(pid)}>重命名</p>
        </div> 
        )
    }

    return (
        <React.Fragment>
            <div className="l-panel" style={{ width: "336px" }}>
                <div className="l-panel-container">
                    <h3>页面列表<i className="icon iconfont">&#xe75e;</i></h3>
                    <div className="l-panel-list">
                        {
                            tpl.length !== 0 && tpl.map((item, i) => {
                                return (
                                    <div
                                        className={cx("l-panel-item", { "l-panel-item-active": pid === item["id"] })}
                                        onClick={(e) => {
                                            setAdd(false)
                                            changePageStateDispatch(JSON.parse(item["tplData"]),item["id"],item["title"])
                                            console.log(update,'????xxx')
                                            e.nativeEvent.stopImmediatePropagation()
                                        }}
                                        key={i}
                                    >
                                        <div className="l-panel-item__drag"></div>
                                        <div className="l-panel-item__title">
                                            <h4>
                                                <span>
                                                {
                                                    update === item["id"] && pid === item["id"] ? 
                                                    <Input size="small" onPressEnter={(e) => {
                                                        setUpdate(false)
                                                        // 更新页面标题
                                                        updateTplRequest(pid,{title: e.target.value})
                                                            .then(res => {
                                                                if(Array.isArray(res)){
                                                                    // 返回的是 err 信息，err有多条
                                                                    message.info(res.join('&'))
                                                                }else{
                                                                    // 成功返回
                                                                   message.info(res) 
                                                                }
                                                                // 修改了页面数据后，重新从服务端拉去数据，渲染页面
                                                                getUserTplData()
                                                                changePageTitleDispatch(e.target.value)
                                                            })
                                                    }} /> :
                                                    item["title"]
                                                }
                                                </span>
                                                {
                                                    item["homePage"] === 1 ?
                                                        <em>首页</em> : ""
                                                }
                                            </h4>
                                            <span className="l-panel__title--path">{item["id"]}.html</span>
                                        </div>
                                        <Popover placement="right" content={content} trigger="click">
                                            <i className="icon iconfont">&#xe7f5;</i>
                                        </Popover>
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
                                                <Input size="small" onPressEnter={(e) => {
                                                    setAdd(false)
                                                    // 创建一个空页面
                                                    addTplRequest(JSON.stringify([]), 1, e.target.value)
                                                        .then(res => {
                                                            getUserTplData()
                                                            changePageStateDispatch([],res.id,e.target.value)
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
                    <div className="l-panel-add" onClick={() => setAdd(true)}>
                        <span><i className="icon iconfont">&#xe8a1;</i>添加页面</span>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{ width: "336px" }}></div>
        </React.Fragment>
    )
}
// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    pUpdate: state.getIn(['page', 'pUpdate']),
    pid: state.getIn(['page', 'pid'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePidStateDispatch(id) {
            dispatch(changePid(id))
        },
        changePageStateDispatch(data, id, title) {
            dispatch(changePid(id))
            dispatch(changePageTitle(title))
            id !== 0 && localStorage.setItem(`tpl_${id}`,JSON.stringify(data))
            dispatch(changePage(data))
        },
        changePageTitleDispatch(title) {
            dispatch(changePageTitle(title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LeftPanel))