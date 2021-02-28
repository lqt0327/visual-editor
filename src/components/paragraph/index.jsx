import React from 'react'
import './style.sass'

const Detail3 = ()=>{
    return (
        <section className="comp_detail_3">
            <h1 className="fd-title comp_detail_3-title">
                体验技术部云凤蝶产品专家
            </h1>
            <div className="comp_detail_3-desc">
                <span className="fd-tag-list comp_detail_3-desc-tags">
                    <label htmlFor="">
                        <p className="fd-desc" style={{color:"rgb(252, 101, 101)"}}>10K/每月</p>
                    </label>
                    <label htmlFor="">
                        <p className="fd-desc" style={{color:"rgb(153, 153, 153)"}}>月结</p>
                    </label>
                </span>
            </div>
        </section>
    )
}

const ParLeft3 = () => {
    return (
        <div className="comp_detail_par_left_3">
            <h1 className="fd-title-dot comp_detail_par_left_3-header">
                <span className="fd-title-dot-marker">
                    <i className="comp_detail_par_left_3-header-marker" style={{backgroundColor:"rgb(98, 96, 225)"}}></i>
                </span>
                <span className="fd-title-dot-txt">标题</span>
            </h1>
            <div className="comp_detail_par_left_3-content">
                <div>
                    1. 负责部门的产品规划、设计和产品生命周期管理；
                    <br />
                    2. 基于用户体验设计理念，结合用户需求和产品技术架构，完成产品/功能的概念设计和原型展示；
                </div>
            </div>
        </div>
    )
}

function Paragraph(props) {

    const { template } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            {
                template === 'parleft3' ? 
                <ParLeft3 /> :
                template === 'detail3' ? 
                <Detail3 /> : ''
            }
        </div>
    )
}

export default React.memo(Paragraph)