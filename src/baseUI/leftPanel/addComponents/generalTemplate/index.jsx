import React, { useState } from "react"
import "./style.sass"

function GeneralTemplate(props) {

    const { imgs } = props

    return (
        <div>
            <div className="l-resource-item">
                <div className="smooth-dnd-container vertical">
                    {
                        imgs.map((item,i)=>{
                            return (
                            <div className="ser-module-item smooth-dnd-draggable-wrapper" key={i}>
                                    <div>
                                        <span className="ser-module-item-image">
                                            <img width="280" src={item[0]} alt=""/>
                                        </span>
                                        <span className="ser-module-item-title">{item[1]}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(GeneralTemplate)