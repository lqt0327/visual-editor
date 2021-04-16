import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Compile } from './utils/compile';
import { getUrlParams } from './utils/tools'
import { useEffect, useRef } from "react";
import { getTplRequest } from './api/request';
import { useState } from "react";

const TplRender = (tplData) => {
  console.log(tplData,'??????',typeof tplData,Array.isArray(tplData))
  ReactDOM.render(
    <React.Fragment>
      {
        tplData.length !== 0 ? tplData.map((item,i)=>{
          return (
            <div className="fengdie-components" key={i}>
              {Compile(item)}
            </div>
          )
        }) : ""
      }
    </React.Fragment>,
    document.getElementById("h5_preview")
  )
}

export const PreviewComponent = () => {

  const mountedRef = useRef(false)

  const [tplData, setTplData] = useState([])

  const safeSetTplData = res => mountedRef.current && setTplData(res);

  const getTplData = ()=>{
    const params = getUrlParams(document.location.search)
    const id = params["page"]
    getTplRequest(id).then(data=>{
      console.log(typeof Array.from(data.tplData),'pppps')
      const tpl = JSON.parse(data.tplData)
      console.log(typeof tpl,Array.isArray(tpl),'xxxx')
      safeSetTplData(tpl)
      document.title = data.title
    })
  }

  useEffect(()=>{
    mountedRef.current = true
    getTplData()
    return () => {
      mountedRef.current = false
    }
  },[])

  useEffect(()=>{
      TplRender(tplData)
  })

  return (
    <div id="h5_preview">

    </div>
  )
};
