import React from 'react';
import _ from 'lodash';

const CommonHoc = (WrappedComponent) => function (props) {
  // 为什么这里能够拿到正确的props ？？
  const {
    comp_i,
    pageData,
    template,
    changePageDataDispatch,
  } = props

  const tpl = pageData[comp_i]

  /**
   * 目前的结构，只能满足content的嵌套，若是content-》children就无法满足，需要重构该函数
   * @param {*} path 
   * @returns 
   */
  const tplData = (path) => {
    if (path.length !== 0) {
      return path.reduce((pre, cur) => {
        if (pre !== 0) {
          return pre.children[cur]
        }
        return tpl.content[cur]
      }, 0)
    } else {
      return tpl
    }
  }

  /**
   * 需要更新，样式 和 内容 区分开来赋值，内容存在嵌套，type不足以完成，需要升级
   * type 数组？？ ['style','color'] ?
   * {style: }
   * @param {*} path 
   * @param {*} newVal 
   * @param {*} type 0 - 样式 1 - 内容
   */
  const changeVal = (path, newVal, type) => {
    const tmp = tplData(path)
    tmp[type] = newVal
    changePageDataDispatch(pageData)
  }

  const curried = _.curry(changeVal)

  return (
    <WrappedComponent 
      curried={curried} 
      tpl={tpl} 
      template={template}
      changeVal={changeVal} 
    />
  )
}

export default CommonHoc