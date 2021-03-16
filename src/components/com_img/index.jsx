import React from 'react';
import PropTypes from 'prop-types'
import './style.sass';

function ComponentImg(props) {

    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template,
        id,
        img_address,
        desc
    } = props

    return (
        <div className="use-tag" id={id} style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <div className="comp_img_2">
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

ComponentImg.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    getTopStateDispatch: PropTypes.func,
    getHeightStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    img_address: PropTypes.string,
    desc: PropTypes.string
}

export default React.memo(ComponentImg)