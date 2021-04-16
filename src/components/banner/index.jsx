import React from 'react';
import './index.sass';
import cx from 'classnames';
import PropTypes from 'prop-types'

function Banner(props) {
    
    const { 
        changePanelStateDispatch,
        id,
        img_address,
        left_editor,
        template,
        index
    } = props
    return (
        <div className={cx("banner",props.className)} id={id} data-index={index} onClick={()=>{
            changePanelStateDispatch([left_editor,template],index);
        }}>
            <a>
                <img src={img_address} alt=""/>
            </a>
        </div>
    )
}

Banner.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    type: PropTypes.string,
    img_address: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Banner
