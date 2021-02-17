import React, { useState } from "react"
import "./style.sass"

function Banner() {

    const [imgs, setImgs] = useState([
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh10g7/0993e70d-7d4f-4e65-86d6-dfbb14a7da05.cms/images/0178ff2a-35ba-4c8c-9b54-29df6688b0c4.png?x-oss-process=image/resize,w_560/crop,h_560","非通栏 Banner - 1"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh10g7/0993e70d-7d4f-4e65-86d6-dfbb14a7da05.cms/images/0178ff2a-35ba-4c8c-9b54-29df6688b0c4.png?x-oss-process=image/resize,w_560/crop,h_560","普通 Banner"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh0p9c/91cfa04c-a80c-4bff-a96d-e3f9c1059c25.cms/images/5011f344-4655-4c57-bd8e-68b0258e05bc.png?x-oss-process=image/resize,w_560/crop,h_560","手动轮播 Banner"],
        ["https://gw.alipayobjects.com/os/q/cms/images/jnlh0hqm/4582999c-1330-49e8-b809-8f459410ed9e.cms/images/785bb68f-d5b0-44c1-967d-7b2e6cfeead9.png?x-oss-process=image/resize,w_560/crop,h_560","自动轮播 Banner"]
    ])

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

export default React.memo(Banner)