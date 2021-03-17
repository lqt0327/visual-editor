import React from 'react';
import './index.sass';
import cx from 'classnames';
import PropTypes from 'prop-types'

function Banner(props) {
    
    const { 
        changePanelStateDispatch,
        id,
        img_address,
        link_address
    } = props
    return (
        <div className={cx("banner",props.className)} id={id} onClick={()=>{
            changePanelStateDispatch({
                currentPanel: ['banner','static'],
                currentId: id
            });
        }}>
            {/* <a href={link_address} target="_blank"> */}
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
    link_address: PropTypes.string,
    id: PropTypes.string.isRequired
}

Banner.defaultProps = {
    type: "text"
}

// export default React.forwardRef(Banner)
export default Banner
