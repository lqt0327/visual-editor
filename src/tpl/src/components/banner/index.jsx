import React from 'react';
import './index.sass';
import cx from 'classnames';
import PropTypes from 'prop-types'

function Banner(props) {
    
    const {         
        img_address,
        link_address
    } = props

    return (
        <div className={cx("banner",props.className)}>
            {/* <a href={link_address} target="_blank"> */}
            <a>
                <img src={img_address} alt=""/>
            </a>
        </div>
    )
}

Banner.propTypes = {
    type: PropTypes.string,
    img_address: PropTypes.string.isRequired,
    link_address: PropTypes.string
}

Banner.defaultProps = {
    type: "text"
}

// export default React.forwardRef(Banner)
export default Banner
