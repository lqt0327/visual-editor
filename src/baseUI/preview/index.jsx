import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { changePanel, addTemplate, changePage } from 'store/actions'
import { generateInitJson, getUuid } from 'src/utils/help';
import { Compile } from "src/utils/compile";
import { Button } from 'antd';
import config from './config.json'
import './style.sass'


function Preview(props) {
    const tipHeightRef = useRef(null)

    const [index, setIndex] = useState(0)
    const [tipHeight,setTipHeight] = useState(0)
    const [showAdd,setShowAdd] = useState('')
    const [atipTop, setaTipTop] = useState(0)
    const [atipHeight, setaTipHeight] = useState(0)
    const [activeId, setActiveId] = useState()

    const {
        panel,
        pageData:page,
        currentTemplate,
        changePanelStateDispatch,
        addTemplateDispatch,
        changePageDataDispatch
    } = props

    const tpldata = JSON.parse(localStorage.getItem('tpldata'))
    let pageData = page.size !== 0 ? page.toJS() :
        tpldata ? tpldata :  []


    const data = useRef([
        {
            comp: "Banner",
            template: "banner1",
            link_address: "www.baidu.com",
            left_editor: "LeftPanelBanner",
            img_address: "https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png"
        }
    ])

    const Dustbin = () => {
        ReactDOM.render(<React.Fragment>
            {/* 
                如何传递 值，配置好各个模板的props和classname等参数
                统一循环渲染 ？
            */}
            {
                // React.createElement('div',{className:'abcd',onClick:()=>{console.log('test')}},'123')
                pageData.length === 0 ?
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="dashed" block  onClick={()=>{changePanelStateDispatch(['AddComponents']);setShowAdd(0+'top');setIndex(0)}}>
                        添加组件
                    </Button>
                </div>
                : ''
            }
            {pageData.map((item,i)=>{
                // 增加数组索引，以便localstorage数据更新时，可以准确定位相关模块
                item["index"] = i
                const json = generateInitJson(item["comp"])
                // 需要的方法 应该在这里统一传递给组件  或  直接写在组件之中
                Object.assign(json.props,{
                    "changePanelStateDispatch": changePanelStateDispatch
                },item)
                return (
                    <div className="fengdie-components" key={i}>
                        <div id="fengdie-components-drop-placeholder-top" style={{opacity:'1',display: showAdd === (i+'top') ? 'flex' : 'none'}}>
                            "添加至此处"
                        </div>
                        <button className="add-components" type="button" onClick={()=>{changePanelStateDispatch(['AddComponents']);setShowAdd(i+'top');setIndex(i)}}>+</button>
                        {Compile(json)}
                        <button className="add-components" type="button" onClick={()=>{changePanelStateDispatch(['AddComponents']);setShowAdd(i+'bottom');setIndex(i+1)}}>+</button>
                        <div id="fengdie-components-drop-placeholder-bottom" style={{opacity:'1',display: showAdd === (i+'bottom') ? 'flex' : 'none'}}>
                            "添加至此处"
                        </div>
                    </div>
                )
            })}
        </React.Fragment>, document.getElementById("stage"))
    }

    const addTemplate2 = useCallback((currentTpl, i) => {
        if(currentTpl) {
            pageData.splice(i,0, config[currentTpl])
            console.log(pageData,'添加测试数据')
            changePageDataDispatch(pageData)
        }
    },[])

    useEffect(() => {
        // console.log([tipHeightRef.current],'测试数据')
        setTipHeight(tipHeightRef.current.offsetHeight)
        document.getElementById(activeId) ? setaTipTop(document.getElementById(activeId).offsetTop) : setaTipTop(0)
        document.getElementById(activeId) ? setaTipHeight(document.getElementById(activeId).offsetHeight) : setaTipHeight(0)
        
        addTemplate2(currentTemplate,index)
        addTemplateDispatch('')
        
    }, [tipHeight,currentTemplate,activeId])

    useEffect(()=>{
        Dustbin()
    },[currentTemplate,showAdd,pageData])

    // 获取 点击模块的 id
    const clickHandler = useCallback((e) => {
        const id = getUuid(e.target)
        if(id) {
            setActiveId(id)
        } else {
            console.warn("请检查当前组件是否具有id属性（属性值特征：llscw+....）")
        }
    },[])

    const deleteComp = useCallback((id) => {
        try{
            const self = document.getElementById(id)
            const index = self.dataset.index
            // data.current.splice(index,1)
            // changePageDataDispatch(data.current)
            pageData.splice(index,1)
            changePageDataDispatch(pageData)
            Dustbin()
            setaTipTop(0)
            setaTipHeight(0)
        }catch(err){
            console.log('楼层id为空')
        }
    },[])

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
                <div className="l-preview-iframe">
                    <div className="l-preview-scroll">
                        <div className="lAnt-spin-nested-loading" ref={tipHeightRef}>
                            <div className="lAnt-spin__main" style={{ background: "rgb(255,255,255)" }}>
                                <div className="lAnt-spin__main-inner" onClick={clickHandler} style={{ paddingBottom: "0px" }} id="stage">
                                    {/* <div className="lAnt-spin__main-first-screen-line"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="l-preview-container">
                    <div className="l-preview-tips" style={{ height: tipHeight + 'px' }} >
                        <div className="l-view-hover-tip" style={{ top: '0px', height: '0px' }}></div>
                        <div className="l-view-active-tip" style={{ top: atipTop + 'px', height: atipHeight + 'px' }}></div>
                        <div className="l-view-tools" style={{ top: atipTop+"px" }}>
                            {/* <div className="l-tools-move l-tools-move-single"> */}
                            <div className="l-tools-move">
                                <i className="icon iconfont">&#xe703;</i>
                                <i className="icon iconfont">&#xe780;</i>
                            </div>
                            <div className="l-tools-copy">
                                <i className="icon iconfont">&#xe767;</i>
                            </div>
                            <div className="l-tools-delete" onClick={()=>{deleteComp(activeId)}}>
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
    panel: state.getIn(['panels','currentPanel']),
    currentTemplate: state.getIn(['template', 'currentTemplate']),  // 左侧添加面板中 选中的模版
    pageData: state.getIn(['page','pageData'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePanelStateDispatch(data) {
            dispatch(changePanel(data))
        },
        addTemplateDispatch(data) {
            dispatch(addTemplate(data))
        },
        changePageDataDispatch(data) {
            localStorage.setItem('tpldata',JSON.stringify(data))
            dispatch(changePage(data))
        }
    }
}

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Preview))