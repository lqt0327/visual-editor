import { Carousel } from 'antd';
import PropTypes from 'prop-types'
import React from 'react'

function carousel(props) {

    const {         
        children
    } = props

    const contentStyle = {
        // height: '160px',
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
        // marginBottom: 0
    };

    return (
        <div className="carousel-content">
            <Carousel autoplay>
                {
                    children.map((item,i)=>{
                        return (
                            <div key={i}>
                                <a style={contentStyle}>
                                    <img src={item["img_address"]} alt={i+1} width="375" height="140" />
                                </a>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>  
    )
}

carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        img_address: PropTypes.string.isRequired,
        link_address: PropTypes.string,
    }))
}

export default React.memo(carousel);