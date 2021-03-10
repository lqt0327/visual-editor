import React from 'react';
import './index.sass';
import cx from 'classnames';
import PropTypes from 'prop-types'

function Banner(props) {
    
    const { changePanelStateDispatch, getTopStateDispatch, getHeightStateDispatch } = props
    
    return (
        <div className={cx("banner",props.className)} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            getTopStateDispatch(document.querySelector('.banner').offsetTop);
            getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png" alt=""/>
            </a>
        </div>
    )
}

Banner.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    getTopStateDispatch: PropTypes.func,
    getHeightStateDispatch: PropTypes.func,
    type: PropTypes.string
}

Banner.defaultProps = {
    type: "text"
}

// export default React.forwardRef(Banner)
export default Banner
