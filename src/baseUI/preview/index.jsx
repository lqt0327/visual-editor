import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { changeBannerDynamic, changeBannerStatic, getTop, getHeight } from 'store/actions'
import { generateInitJson, getUuid } from 'src/utils/help';
import { Compile } from "src/utils/compile";
import * as components from 'components'
import './style.sass'


function Preview(props) {
    const lqtref = useRef(null)
    console.log(props, '------')

    const {
        aTipTop,
        aTipHeight,
        changeBannerStaticStateDispatch,
        changeBannerDynamicStateDispatch,
        getTopStateDispatch,
        getHeightStateDispatch
    } = props

    const [data,setData] = useState([[components.Banner,{className:'test',changeBannerStaticStateDispatch,getTopStateDispatch,getHeightStateDispatch},''],[components.Advert,{className:'test2'},''],[components.Carousel,{className:'test3',changeBannerDynamicStateDispatch,getTopStateDispatch,getHeightStateDispatch},'']])

    const _onClick = useCallback((e) => {
        // let child = lqtref.current.childNodes
        // for(let k in child) {

        // }
        console.log(lqtref, '=======')
    }, [])

    const Dustbin = () => {
        let json = generateInitJson("AutoComplete")
        ReactDOM.render(<React.Fragment>
            {Compile(json)}
            {Compile(json)}
            {/* 
                如何传递 值，配置好各个模板的props和classname等参数
                统一循环渲染 ？
            */}
            {
                React.createElement('div',{className:'abcd',onClick:()=>{console.log('test')}},'123')
            }
            {data.map((_,i)=>{
                console.log(_[1],_[2],'////')
                return (
                    React.createElement(_[0],Object.assign(_[1],{key:i}),_[2])
                )
            })}
        </React.Fragment>, document.getElementById("stage"))
        // return (
        //     <div className="lAnt-spin__main" style={{background:"rgb(255,255,255)"}}>
        //         <div className="lAnt-spin__main-inner" onClick={_onClick} style={{paddingBottom:"0px"}} ref={lqtref} id="stage">
        //             {/* <div className="lAnt-spin__main-first-screen-line"></div> */}
        //         </div>
        //     </div>
        // )
    }

    useEffect(() => {
        Dustbin()
    }, [])

    return (
        <div className="l-preview">
            <div className="l-page-path-container">
                <div className="l-page-path">
                    <div className="l-pp-url"><span>https://render.yunfengdie.cn/p/q/kj9nbl7b</span></div>
                    <div className="l-pp-share"><i className="icon iconfont">&#xe7d0;</i></div>
                </div>
            </div>
            <div className="l-prevew-box">
                <div className="l-preview-iframe">
                    <div className="l-preview-scroll">
                        <div className="lAnt-spin-nested-loading">
                            <div className="lAnt-spin__main" style={{ background: "rgb(255,255,255)" }}>
                                <div className="lAnt-spin__main-inner" onClick={_onClick} style={{ paddingBottom: "0px" }} ref={lqtref} id="stage">
                                    {/* <div className="lAnt-spin__main-first-screen-line"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-preview-container">
                    <div className="l-preview-tips" style={{ height: '600px' }}>
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
    aTipTop: state.getIn(['activeTip','currentTop']),
    aTipHeight: state.getIn(['activeTip','currentHeight'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeBannerStaticStateDispatch(data) {
            dispatch(changeBannerStatic(data))
        },
        changeBannerDynamicStateDispatch(data) {
            dispatch(changeBannerDynamic(data))
        },
        getTopStateDispatch(data) {
            dispatch(getTop(data))
        },
        getHeightStateDispatch(data) {
            dispatch(getHeight(data))
        }
    }
}

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Preview))