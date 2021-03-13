import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { changePanel, getTop, getHeight, addTemplate } from 'store/actions'
import { generateInitJson, getUuid } from 'src/utils/help';
import { Compile } from "src/utils/compile";
import * as components from 'components'
import './style.sass'


function Preview(props) {
    const tipHeightRef = useRef(null)
    console.log(props, '------')

    const [index, setIndex] = useState(0)
    const [tipHeight,setTipHeight] = useState(0)
    const [showAdd,setShowAdd] = useState('')

    const {
        aTipTop,
        aTipHeight,
        panel,
        currentTemplate,
        changePanelStateDispatch,
        getTopStateDispatch,
        getHeightStateDispatch,
        addTemplateDispatch
    } = props

    const [data,setData] = useState([
            ["Banner",{}],
            ["Carousel",{}],
            ["Tab",{}],
            ["EntryTab",{}],
            ["NormalList",{template: 'normal3'}],
            ["RowList",{}],
            ["OperationList",{template: 'opt1'}],
            ["NewList",{}],
            ["NewList2",{template: 'cut1'}],
            ["GridList",{}],
            ["GridList2",{template: 'card2'}],
            ["OperationList",{template: 'opt1'}],
            ["Quote",{template: 'quote1'}],
            ["Paragraph",{template: 'detail3'}],
            ["ComImg",{template: 'img2'}],
            ["ComButton",{template: 'btn2'}],
            ["ComFAQ",{template: 'faq1'}],
            ["ComFooter",{}],
            ["ComStep",{template: 'step1'}]
    ])

    const _onClick = useCallback((e) => {
    }, [])

    const Dustbin = () => {
        ReactDOM.render(<React.Fragment>
            {/* 
                如何传递 值，配置好各个模板的props和classname等参数
                统一循环渲染 ？
            */}
            {
                React.createElement('div',{className:'abcd',onClick:()=>{console.log('test')}},'123')
            }
            {data.map((item,i)=>{
                const json = generateInitJson(item[0])
                Object.assign(json.props,{
                    "changePanelStateDispatch": changePanelStateDispatch,
                    "getTopStateDispatch": getTopStateDispatch,
                    "getHeightStateDispatch": getHeightStateDispatch
                },item[1])
                // json.props["changePanelStateDispatch"] = changePanelStateDispatch
                // json.props["getTopStateDispatch"] = getTopStateDispatch
                // json.props["getHeightStateDispatch"] = getHeightStateDispatch
                return (
                    <div className="fengdie-components" key={i}>
                        <div id="fengdie-components-drop-placeholder" style={{opacity:'1',display: showAdd === (i+'top') ? 'flex' : 'none'}}>
                            "添加至此处"
                        </div>
                        <button className="add-components" type="button" onClick={()=>{changePanelStateDispatch(['addComponents']);setShowAdd(i+'top');setIndex(i);console.log(i,'测试数据top')}}>+</button>
                        {Compile(json)}
                        <button className="add-components" type="button" onClick={()=>{changePanelStateDispatch(['addComponents']);setShowAdd(i+'bottom');setIndex(i+1)}}>+</button>
                        <div id="fengdie-components-drop-placeholder" style={{opacity:'1',display: showAdd === (i+'bottom') ? 'flex' : 'none'}}>
                            "添加至此处"
                        </div>
                    </div>
                )
            })}
        </React.Fragment>, document.getElementById("stage"))
    }

    const addTemplate = (currentTemplate, i) => {
        // 还应该使用 localstorage 做一个长期存储， X
        // 无法使用 localstorage 存储方法， 改用服务端存储
        switch(currentTemplate) {
            case 'banner1':
                data.splice(i,0,["Banner"])
                setData(data)
                break;
            case 'Carousel2':
                data.splice(i,0,["Carousel"])
                setData(data)
                break;
            default :
        }
    }

    useEffect(() => {
        setTipHeight(tipHeightRef.current.offsetHeight)
        console.log(Compile(generateInitJson("ComStep")),'=====')
        addTemplate(currentTemplate,index)
        console.log(data,'????222')
        addTemplateDispatch('')
        Dustbin()
    }, [tipHeight,panel,showAdd,currentTemplate,data])

    return (
        <div className="l-preview">
            <div className="l-preview--mask" onClick={()=>setShowAdd('')}></div>
            <div className="l-page-path-container">
                <div className="l-page-path">
                    <div className="l-pp-url"><span>https://render.yunfengdie.cn/p/q/kj9nbl7b</span></div>
                    <div className="l-pp-share"><i className="icon iconfont">&#xe7d0;</i></div>
                </div>
            </div>
            <div className="l-prevew-box">
                <div className="l-preview-iframe" ref={tipHeightRef}>
                    <div className="l-preview-scroll">
                        <div className="lAnt-spin-nested-loading">
                            <div className="lAnt-spin__main" style={{ background: "rgb(255,255,255)" }}>
                                <div className="lAnt-spin__main-inner" onClick={_onClick} style={{ paddingBottom: "0px" }} id="stage">
                                    {/* <div className="lAnt-spin__main-first-screen-line"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-preview-container">
                    <div className="l-preview-tips" style={{ height: tipHeight + 'px' }} onClick={()=>console.log([document.querySelector('.l-preview-iframe').offsetHeight])}>
                        <div className="l-view-hover-tip" style={{ top: '0px', height: '0px' }}></div>
                        <div className="l-view-active-tip" style={{ top: aTipTop + 'px', height: aTipHeight + 'px' }}></div>
                        <div className="l-view-tools" style={{ top: '8px' }}>
                            {/* <div className="l-tools-move l-tools-move-single"> */}
                            <div className="l-tools-move">
                                <i className="icon iconfont">&#xe703;</i>
                                <i className="icon iconfont">&#xe780;</i>
                            </div>
                            <div className="l-tools-copy">
                                <i className="icon iconfont">&#xe767;</i>
                            </div>
                            <div className="l-tools-delete">
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
    panel: state.getIn(['panels', 'currentPanel']),
    currentTemplate: state.getIn(['template', 'currentTemplate']),
    aTipTop: state.getIn(['activeTip','currentTop']),
    aTipHeight: state.getIn(['activeTip','currentHeight'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePanelStateDispatch(data) {
            dispatch(changePanel(data))
        },
        getTopStateDispatch(data) {
            dispatch(getTop(data))
        },
        getHeightStateDispatch(data) {
            dispatch(getHeight(data))
        },
        addTemplateDispatch(data) {
            dispatch(addTemplate(data))
        }
    }
}

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Preview))