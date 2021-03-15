import { Carousel } from 'antd';
import PropTypes from 'prop-types'
import React from 'react'

function carousel(props) {
    console.log(props,'????')

    const { 
        changePanelStateDispatch, 
        getTopStateDispatch, 
        getHeightStateDispatch,
        children,
        id
    } = props

    console.log(props,'carousel_props')

    const contentStyle = {
        // height: '160px',
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
        // marginBottom: 0
    };

    return (
        <div className="carousel-content" id={id} onClick={()=>{
            changePanelStateDispatch(['banner','dynamic']);
            getTopStateDispatch(document.querySelector('.carousel-content').offsetTop);
            getHeightStateDispatch(document.querySelector('.carousel-content').offsetHeight)
        }}>
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
    changePanelStateDispatch: PropTypes.func,
    getTopStateDispatch: PropTypes.func,
    getHeightStateDispatch: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.shape({
        img_address: PropTypes.string.isRequired,
        link_address: PropTypes.string,
    })),
    id: PropTypes.string.isRequired
}

export default React.memo(carousel);