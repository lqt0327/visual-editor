import { Carousel } from 'antd';
import PropTypes from 'prop-types'
import React from 'react'

function carousel(props) {

    const { 
        changePanelStateDispatch, 
        children,
        id,
        template,
        left_editor,
        index
    } = props

    return (
        <div className="carousel-content" id={id} data-index={index} onClick={()=>{
            changePanelStateDispatch([left_editor,template],index);
        }}>
            <Carousel autoplay>
                {
                    children.map((item,i)=>{
                        return (
                            <div key={i}>
                                <a>
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
    children: PropTypes.arrayOf(PropTypes.shape({
        img_address: PropTypes.string.isRequired,
        link_address: PropTypes.string,
    })),
    id: PropTypes.string.isRequired,
    template: PropTypes.string.isRequired,
    left_editor: PropTypes.string.isRequired
}

export default React.memo(carousel);