import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Compile } from './utils/compile';
import { useEffect, useRef } from "react";
import { getTplRequest } from './api/request';
import { useState } from "react";
import { useCallback } from "react";

const TplRender = (tplData) => {
  ReactDOM.render(
    <React.Fragment>
      {
        React.createElement('div',{},'123')
      }
      {
        console.log(tplData,'+++++')
      }
      {
        tplData.map((item,i)=>{
          return (
            <div key={i}>
              {Compile(item)}
            </div>
          )
        })
      }
    </React.Fragment>,
    document.getElementById("h5_preview")
  )
}

export const PreviewComponent = () => {

  const mountedRef = useRef(false)

  const [tplData, setTplData] = useState([])

  const safeSetTplData = res => mountedRef.current && setTplData(res);

  const getTplData = useCallback((id)=>{
    getTplRequest(1).then(data=>{
      console.log(data,'????',JSON.parse(data.tplData))
      const tpl = JSON.parse(data.tplData)
      safeSetTplData(tpl)
    })
  },[])

  useEffect(()=>{
    mountedRef.current = true
    getTplData()
    return () => {
      mountedRef.current = false
    }
  },[])

  useEffect(()=>{
      TplRender(tplData)
  },[tplData])

  return (
    <div id="h5_preview">

    </div>
  )
};
