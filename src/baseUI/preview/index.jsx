import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { changePanel, addTemplate, changePage, changeCompI, setShowAdd } from 'store/actions'
import { generateInitJson, getUuid } from 'src/utils/help';
import { Compile } from "src/utils/compile";
import { Button } from 'antd';
import cx from 'classnames';
import './style.sass'
import { url_h5 } from "../../utils/tools/config";


function Preview(props) {
  const tipHeightRef = useRef(null)

  // 组件添加的位置  索引
  const [index, setIndex] = useState(0)

  // 动态计算右侧工具栏的位置
  const [atipTop, setaTipTop] = useState(0)
  const [atipHeight, setaTipHeight] = useState(0)
  const [tipHeight, setTipHeight] = useState(0)
  const [uuId, setuuId] = useState()

  const {
    pid,
    comp_i,
    showAdd,
    setShowAddDispatch,
    pageData: page,
    currentTemplate,
    changePanelStateDispatch,
    addTemplateDispatch,
    changePageDataDispatch,
    changeCompIDispatch
  } = props

  const drop = (e, index) => {
    const data = JSON.parse(e.dataTransfer.getData('text/plain'))
    // TODO: 执行插入逻辑  待处理 上下插入 区分操作
    // 拖动元素，可放置区域自动展示
    setTemplate(data, index)
    console.log(e,'??kkkkkk',data)
    e.stopPropagation();
  }

  const dragover = (e) => {
    // console.log(e,'??kkkkkk3333')
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy";

  }
  

  const showDropPlace = (e, activeIndex) => {
    if(showAdd === activeIndex) return
    setShowAddDispatch(activeIndex)
  }

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
              setShowAddDispatch(0 + 'top');
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
          // item["index"] = i
          console.log(item,'akldfjalksnfdla++++++=====')
          const json = generateInitJson(item["comp"])
          // 需要的方法 应该在这里统一传递给组件  或  直接写在组件之中
          Object.assign(json.props, item)
          const { id } = json
          const { left_editor, template } = item
          return (
            <div
              className="fengdie-components"
              key={i}
            >
              <div
                id="fengdie-components-drop-placeholder-top"
                style={{
                  opacity: '1',
                  display: (showAdd === (i + 'top') || showAdd === (i + 'both')) ? 'flex' : 'none'
                }}
                onDrop={(e) => drop(e, i)}
                onDragOver={(e) => dragover(e)}
              >
                "添加至此处"
              </div>
              <button
                className="add-components"
                type="button"
                onClick={() => {
                  changePanelStateDispatch(['AddComponents']);
                  setShowAddDispatch(i + 'top');
                  setIndex(i)
                }
                }>+</button>
                <div 
                  className="open-modules"
                  id={id}
                  onClick={()=>{
                    changePanelStateDispatch([left_editor,template],i)
                  }}
                  onDrop={(e)=>{}}
                  onDragOver={e=>showDropPlace(e, i + 'both')}
                >
                  {Compile(json)}
                </div>
              <button
                className="add-components"
                type="button"
                onClick={() => {
                  changePanelStateDispatch(['AddComponents']);
                  setShowAddDispatch(i + 'bottom');
                  setIndex(i + 1)
                }
                }>+</button>
              <div
                id="fengdie-components-drop-placeholder-bottom"
                style={{
                  opacity: '1',
                  display: (showAdd === (i + 'bottom') || showAdd === (i + 'both')) ? 'flex' : 'none'
                }}
                onDrop={(e) => drop(e, i+1)}
                onDragOver={(e) => dragover(e)}
              >
                "添加至此处"
              </div>
            </div>
          )
        })
      }
    </React.Fragment>, document.getElementById("stage"))
  }

  /**
   * 添加模块函数
   * @param {string} currentTpl -分类的唯一标识
   * @param {*} i 插入位置的索引
   */
  const setTemplate = (currentTpl, i) => {
    if (currentTpl.comp) {
      pageData.splice(i, 0, currentTpl)
      changePageDataDispatch(pageData, pid)
    }
  }

  useEffect(() => {
    setTipHeight(tipHeightRef.current.offsetHeight)
    const ele = document.getElementById(uuId)
    if(ele) {
      // 获取右侧工具栏 距离顶部高度
      setaTipTop(ele.offsetTop - tipHeightRef.current.scrollTop)
      // 获取点击预览页面 背景阴影的高度
      setaTipHeight(ele.offsetHeight)
    }else {
      // TODO: 上下移动组件，工具栏需要随组件一起移动，组件的背景阴影也是一样
      // 上下移动组件，工具栏隐藏
      // setIsShow(false)
      setaTipHeight(0)
    }
    setTemplate(currentTemplate, index)
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

  useEffect(()=>{
    tipHeightRef.current.addEventListener('scroll', (e) => {
      console.log(uuId,'???lll;;;', [document.getElementById(uuId)])
      
    })
  })

  return (
    <div className="l-preview">
      {/* <div className="l-preview--mask" onClick={() => setShowAddDispatch('')}></div> */}
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
                  {/* Dustbin 挂载在此处 */}
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
              <div className={cx("l-tools-move", {
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
  comp_i: state.getIn(['panels', 'comp_i']),
  showAdd: state.getIn(['preview', 'showAdd'])
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
    },
    // 预览页面 组件将被添加的位置 那个 “添加至此处” 的虚线框
    setShowAddDispatch(index) {
      dispatch(setShowAdd(index))
    }
  }
}

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Preview))