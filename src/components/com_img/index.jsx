import React from 'react';
import PropTypes from 'prop-types'
import './style.sass';

function ComponentImg(props) {

    const { 
        changePanelStateDispatch,       
        template,
        id,
        index,
        img_address,
        left_editor,
        desc
    } = props

    return (
        <div className="use-tag" id={id} data-index={index} style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch([left_editor,template,index])
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
    id: PropTypes.string.isRequired,
    img_address: PropTypes.string,
    desc: PropTypes.string
}

export default React.memo(ComponentImg)