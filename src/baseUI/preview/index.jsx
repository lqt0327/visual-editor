import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { changePanel, addTemplate, changePage, changeCompI } from 'store/actions'
import { generateInitJson, getUuid } from 'src/utils/help';
import { Compile } from "src/utils/compile";
import { Button } from 'antd';
import cx from 'classnames';
import config from 'server/comp_config/config.json'
import './style.sass'
import { url_h5 } from "../../utils/tools/config";


function Preview(props) {
    const tipHeightRef = useRef(null)

    // 组件添加的位置  索引
    const [index, setIndex] = useState(0)
    // 预览页面 组件将被添加的位置 那个 “添加至此处” 的虚线框
    const [showAdd, setShowAdd] = useState('')

    // 动态计算右侧工具栏的位置
    const [atipTop, setaTipTop] = useState(0)
    const [atipHeight, setaTipHeight] = useState(0)
    const [tipHeight, setTipHeight] = useState(0)
    const [uuId, setuuId] = useState()

    const {
        pid,
        comp_i,
        pageData: page,
        currentTemplate,
        changePanelStateDispatch,
        addTemplateDispatch,
        changePageDataDispatch,
        changeCompIDispatch
    } = props

    // 获取页面最新数据
    const tpldata = JSON.parse(localStorage.getItem(`tpl_${pid}`))
    let pageData = page.size !== 0 ? page.toJS() :
        tpldata ? tpldata : []

        // 右侧预览页面数据
    const Dustbin = () => {
        ReactDOM.render(<React.Fragment>
            {
                pid !== 0 && pageData.length === 0 ?
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="dashed" block onClick={() => {
                            changePanelStateDispatch(['AddComponents']);
                            setShowAdd(0 + 'top');
                            setIndex(0)
                        }}>
                            添加组件
                    </Button>
                    </div>
                    : ''
            }
            {
                pageData.map((item, i) => {
                    // 增加数组索引，以便localstorage数据更新时，可以准确定位相关模块
                    item["index"] = i
                    const json = generateInitJson(item["comp"])
                    // 需要的方法 应该在这里统一传递给组件  或  直接写在组件之中
                    Object.assign(json.props, {
                        "changePanelStateDispatch": changePanelStateDispatch
                    }, item)
                    return (
                        <div className="fengdie-components" key={i}>
                            <div
                                id="fengdie-components-drop-placeholder-top"
                                style={{
                                    opacity: '1',
                                    display: showAdd === (i + 'top') ? 'flex' : 'none'
                                }}>
                                "添加至此处"
                            </div>
                            <button
                                className="add-components"
                                type="button"
                                onClick={() => {
                                    changePanelStateDispatch(['AddComponents']);
                                    setShowAdd(i + 'top');
                                    setIndex(i)
                                }
                                }>+</button>
                            {Compile(json)}
                            <button
                                className="add-components"
                                type="button"
                                onClick={() => {
                                    changePanelStateDispatch(['AddComponents']);
                                    setShowAdd(i + 'bottom');
                                    setIndex(i + 1)
                                }
                                }>+</button>
                            <div
                                id="fengdie-components-drop-placeholder-bottom"
                                style={{
                                    opacity: '1',
                                    display: showAdd === (i + 'bottom') ? 'flex' : 'none'
                                }}>
                                "添加至此处"
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>, document.getElementById("stage"))
    }

    const addTemplate2 = (currentTpl, i) => {
        if (currentTpl) {
            pageData.splice(i, 0, config[currentTpl])
            changePageDataDispatch(pageData, pid)
        }
    }

    useEffect(() => {
        setTipHeight(tipHeightRef.current.offsetHeight)
        // 获取右侧工具栏 距离顶部高度
        const ele = document.getElementById(uuId)
        ele ? setaTipTop(ele.offsetTop - tipHeightRef.current.scrollTop) : setIsShow(false)
        // 获取点击预览页面 背景阴影的高度
        ele ? setaTipHeight(ele.offsetHeight) : setaTipHeight(0)
        addTemplate2(currentTemplate, index)
        addTemplateDispatch('')

    }, [tipHeight, currentTemplate, uuId, showAdd, comp_i])

    useEffect(() => {
        Dustbin()
    }, [currentTemplate, showAdd, pageData, pid])

    // 获取 点击模块的 id
    const clickHandler = (e) => {
        const id = getUuid(e.target)
        if (id) {
            setuuId(id)
            setIsShow(true)
        } else {
            console.warn("请检查当前组件是否具有id属性（属性值特征：llscw+....）")
        }
    }

    const deleteComp = () => {
        try {
            pageData.splice(comp_i, 1)
            changePanelStateDispatch(["page"])
            changePageDataDispatch(pageData, pid)
            setaTipTop(0)
            setaTipHeight(0)
            changeCompI()
        } catch (err) {
            console.log('楼层id为空')
        }
    }
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        // 页面滚动时 隐藏右侧工具栏
        isShow && tipHeightRef.current.addEventListener('scroll', () => {
            setIsShow(false)
        })
    })

    /**
     * @description 右侧工具栏中 上下移动功能
     * @param {number} i -需要移动的组件的索引
     * @param {number} j -组件  上移（i-1） 下移（i+1）
     */
    const moveComp = (i, j) => {
        // 索引改变  左侧组件配置面板索引也要变
        [pageData[i], pageData[j]] = [pageData[j], pageData[i]]
        changePageDataDispatch(pageData, pid)
        changeCompIDispatch(j)
        Dustbin()
    }

    return (
        <div className="l-preview">
            <div className="l-preview--mask" onClick={() => setShowAdd('')}></div>
            <div className="l-page-path-container">
                <div className="l-page-path">
                    <div className="l-pp-url"><span>{pid === 0 ? "" : url_h5 + `?page=${pid}`}</span></div>
                    <div className="l-pp-share"><i className="icon iconfont">&#xe7d0;</i></div>
                </div>
            </div>
            <div className="l-prevew-box">
                <div className="l-preview-iframe">
                    <div className="l-preview-scroll" ref={tipHeightRef}>
                        <div className="lAnt-spin-nested-loading">
                            <div className="lAnt-spin__main" style={{ background: "rgb(255,255,255)" }}>
                                <div
                                    className="lAnt-spin__main-inner"
                                    onClick={clickHandler}
                                    style={{ paddingBottom: "0px" }}
                                    id="stage"
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-preview-container">
                    <div className="l-preview-tips" style={{ height: tipHeight + 'px', display: isShow ? "block" : "none" }} >
                        <div className="l-view-hover-tip" style={{ top: '0px', height: '0px' }}></div>
                        <div className="l-view-active-tip" style={{ top: atipTop + 'px', height: atipHeight + 'px' }}></div>
                        <div className="l-view-tools" style={{ top: atipTop + "px" }}>
                            <div className={cx("l-tools-move",{
                                "hide": pageData.length <= 1
                            })}>
                                <i
                                    className={cx("icon iconfont", {
                                        "hide": comp_i === 0
                                    })}
                                    style={{
                                        marginBottom: comp_i === (pageData.length - 1) ? "0" : "13px"
                                    }}
                                    onClick={() => {
                                        moveComp(comp_i, comp_i - 1)
                                    }}>&#xe703;</i>
                                <i
                                    className={cx("icon iconfont", {
                                        "hide": comp_i === (pageData.length - 1)
                                    })}
                                    onClick={() => {
                                        moveComp(comp_i, comp_i + 1)
                                    }}>&#xe780;</i>
                            </div>
                            <div className="l-tools-copy">
                                <i className="icon iconfont">&#xe767;</i>
                            </div>
                            <div className="l-tools-delete" onClick={() => { deleteComp() }}>
                                <i className="icon iconfont">&#xe74e;</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    currentTemplate: state.getIn(['template', 'currentTemplate']),  // 左侧添加面板中 选中的模版
    pid: state.getIn(['page', 'pid']),
    pageData: state.getIn(['page', 'pageData']),
    comp_i: state.getIn(['panels', 'comp_i'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePanelStateDispatch(data, comp_i) {
            dispatch(changePanel(data))
            dispatch(changeCompI(comp_i))
        },
        addTemplateDispatch(data) {
            dispatch(addTemplate(data))
        },
        changePageDataDispatch(data, id) {
            localStorage.setItem(`tpl_${id}`, JSON.stringify(data))
            dispatch(changePage(data))
        },
        changeCompIDispatch(i) {
            dispatch(changeCompI(i))
        }
    }
}

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Preview))