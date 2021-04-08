import { Carousel } from 'antd';
import React from 'react'

function carousel(props) {

    const { 
        children
    } = props

    return (
        <div className="carousel-content" style={{position:"relative"}}>
            <Carousel autoplay>
                {
                    children.map((item,i)=>{
                        return (
                            <div key={i}>
                                <a href={item["link_address"]}>
                                    <img src={item["img_address"]} alt={i+1} style={{width:"100vw"}}/>
                                </a>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>  
    )
}

export default React.memo(carousel);