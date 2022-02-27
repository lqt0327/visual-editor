import React from 'react';
import _ from 'lodash';

const CommonHoc = (WrappedComponent) => function (props) {
  // 为什么这里能够拿到正确的props ？？
  console.log(props,'???Xxxx')
  const {
    comp_i,
    pageData,
    template,
    changePageDataDispatch,
  } = props

  const tpl = pageData[comp_i]

  const tplData = (path) => {
    if (path.length !== 0) {
      return path.reduce((pre, cur) => {
        if (pre !== 0) {
          return pre.children[cur]
        }
        return tpl.children[cur]
      }, 0)
    } else {
      return tpl
    }
  }

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