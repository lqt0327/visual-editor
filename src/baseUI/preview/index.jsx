import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { changePanel, getTop, getHeight, addTemplate } from 'store/actions'
import { generateInitJson, getUuid } from 'src/utils/help';
import { Compile } from "src/utils/compile";
import config from './config.json'
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

    const data = useRef([
        {
            comp: "Banner",
            template: "banner1",
            link_address: "www.baidu.com",
            img_address: "https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png"
        }
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
            {data.current.map((item,i)=>{
                const json = generateInitJson(item["comp"])
                console.log(json,'json----')
                // 需要的方法 应该在这里统一传递给组件  或  直接写在组件之中
                Object.assign(json.props,{
                    "changePanelStateDispatch": changePanelStateDispatch,
                    "getTopStateDispatch": getTopStateDispatch,
                    "getHeightStateDispatch": getHeightStateDispatch
                },item)
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

    const addTemplate = (currentTpl, i) => {
        currentTpl && data.current.splice(i,0, config[currentTpl])
    }

    useEffect(() => {
        console.log(data.current[0].comp,'????222')
        setTipHeight(tipHeightRef.current.offsetHeight)
        console.log(Compile(generateInitJson("ComStep")),'=====')
        addTemplate(currentTemplate,index)
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