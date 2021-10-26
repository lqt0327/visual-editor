import React from 'react';
import './index.sass';
import cx from 'classnames';
import PropTypes from 'prop-types'

function Banner(props) {
    
    const { 
        img_address,
    } = props
    return (
        <div className={cx("banner",props.className)}>
            <a>
                <img src={img_address} alt=""/>
            </a>
        </div>
    )
}

Banner.propTypes = {
    img_address: PropTypes.string.isRequired,
}

export default Banner
