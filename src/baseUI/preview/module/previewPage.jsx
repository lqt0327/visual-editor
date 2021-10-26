import React from 'react'

function previewPage(props) {

  const {
    pid,
    pageData,
    changePanelStateDispatch
  } = props

  const [index, setIndex] = useState(0)

  return (
    <React.Fragment>
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
          // item["index"] = i
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
                <div 
                  className="open-modules"
                  id={id}
                  onClick={()=>{
                    changePanelStateDispatch([left_editor,template],i)
                  }}
                >
                  {Compile(json)}
                </div>
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
    </React.Fragment>
  )
}

export default previewPage