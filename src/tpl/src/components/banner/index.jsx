import React from 'react';
import './index.sass';
import cx from 'classnames';

function Banner(props) {
    
    const {
        img_address,
        link_address,
    } = props
    return (
        <div className={cx("banner",props.className)} style={{position:"relative"}}>
            <a href={link_address}>
                <img src={img_address} alt=""/>
            </a>
        </div>
    )
}

export default Banner
