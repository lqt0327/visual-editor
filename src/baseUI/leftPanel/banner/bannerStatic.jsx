import React, { useState, useEffect } from 'react';
import { Upload, LinkAddress } from "components";

function BannerStatic(props) {
    const {comp_i} = props
    const tpldata = JSON.parse(localStorage.getItem('tpldata'))

    const [linkVal, setLinkVal] = useState('')

    useEffect(()=>{
        const tpl = tpldata[comp_i]
        if(linkVal !== '') {
            tpl["link_address"] = linkVal
            localStorage.setItem('tpldata',JSON.stringify(tpldata))
        }
        console.log(JSON.parse(localStorage.getItem('tpldata')),'????')
    },[linkVal])

    return (
        <div className="schema-editor-container">
            <Upload 
                imgWidth={750}
                imgHeight={280}
            />
            <LinkAddress setLinkVal={setLinkVal} />
        </div>
    )
}

export default BannerStatic;