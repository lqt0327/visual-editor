import React from 'react';
import './style.sass';

function ComponentImg(props) {

    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template
    } = props

    return (
        <div className="use-tag" style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <div className="comp_img_2">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/hxisPCETBGwVXAdEYrke.png" alt="" className="comp_img_2-img"/>
                {
                    template === 'img2' ? 
                    <p className="fd-desc sub comp_img_2-text">云凤蝶产品图</p> :
                    ""
                }
            </div>
        </div>
    )
}

export default React.memo(ComponentImg)