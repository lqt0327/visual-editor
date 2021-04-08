import React from 'react'
import './style.sass'

const Step1 = (props) => {
    const { param } = props
    return (
        <div className="comp_step_1">
            {
                param.map((item, i) => {
                    return (
                        <section className="comp_step_1-row" key={i}>
                            <div className="comp_step_1-row-step">
                                {item.step}
                            </div>
                            <div className="comp_step_1-row-content">
                                <img src={item.img_address} alt="" className="comp_step_1-row-content-icon" />
                                <div className="comp_step_1-row-content-main">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}

const Step3 = (props) => {
    const { param } = props
    return (
        <div className="comp_step_3">
            {
                param.map((item, i) => {
                    return (
                        <section className="comp_step_3-row" key={i}>
                            <div className="comp_step_3-row-step">
                                {item.step}
                            </div>
                            <div className="comp_step_3-row-content">
                                <div className="comp_step_3-row-content-main">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                                <img src={item.img_address} alt="" className="comp_step_3-row-content-icon" />
                            </div>
                        </section>
                    )
                })
            }
        </div>
    )
}

function ComStep(props) {

    const {
        template,
        children
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }}>
            {
                template === 'step1' ?
                    <Step1
                        param={children}
                    /> :
                    template === 'step3' ?
                        <Step3
                            param={children}
                        /> : ""
            }
        </div>
    )
}

export default React.memo(ComStep)