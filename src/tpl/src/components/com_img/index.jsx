import React from 'react';
import './style.sass';

function ComponentImg(props) {

    const { 
        template,
        img_address,
        link_address,
        desc
    } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            <div className="comp_img_2" onClick={()=>window.open(link_address,"_self")}>
                <img src={img_address} alt="" className="comp_img_2-img"/>
                {
                    template === 'img2' ? 
                    <p className="fd-desc sub comp_img_2-text">{desc}</p> :
                    ""
                }
            </div>
        </div>
    )
}

export default React.memo(ComponentImg)