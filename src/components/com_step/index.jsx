import React from 'react'
import './style.sass'

const Step1 = () => {
    return (
        <div className="comp_step_1">
            <section className="comp_step_1-row">
                <div className="comp_step_1-row-step">
                    Step 1
                </div>
                <div className="comp_step_1-row-content">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/ooZDRgfpKxPsQSrVmGZX.png" alt="" className="comp_step_1-row-content-icon" />
                    <div className="comp_step_1-row-content-main">
                        <h1>在线预定</h1>
                        <p>填写信息，上传驾照正反面</p>
                    </div>
                </div>
            </section>
            <section className="comp_step_1-row">
                <div className="comp_step_1-row-step">
                    Step 2
                </div>
                <div className="comp_step_1-row-content">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/XKTyAJMVsgjEOuxwtITN.png" alt="" className="comp_step_1-row-content-icon" />
                    <div className="comp_step_1-row-content-main">
                        <h1>翻译制作</h1>
                        <p>对驾照信息进行翻译及认证，于 1 个工作日内完成</p>
                    </div>
                </div>
            </section>
            <section className="comp_step_1-row">
                <div className="comp_step_1-row-step">
                    Step 3
                </div>
                <div className="comp_step_1-row-content">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/QJXyJDFxUiHbSfShONXG.png" alt="" className="comp_step_1-row-content-icon" />
                    <div className="comp_step_1-row-content-main">
                        <h1>寄送到家</h1>
                        <p>在证件的最后一页贴上白底证件照，签署中文姓名</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

const Step3 = () => {
    <div className="comp_step_3">
        <section className="comp_step_3-row">
            <div className="comp_step_3-row-step">
                Step 1
                    </div>
            <div className="comp_step_3-row-content">
                <div className="comp_step_3-row-content-main">
                    <h1>在线预定</h1>
                    <p>填写信息，上传驾照正反面</p>
                </div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/oXWUFANYmciCOAAEQJjD.png" alt="" className="comp_step_3-row-content-icon" />
            </div>
        </section>
        <section className="comp_step_3-row">
            <div className="comp_step_3-row-step">
                Step 2
                    </div>
            <div className="comp_step_3-row-content">
                <div className="comp_step_3-row-content-main">
                    <h1>翻译制作</h1>
                    <p>对驾照信息进行翻译及认证，于 1 个工作日内完成</p>
                </div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/PeDRFGbGRbNBIaQTDndp.png" alt="" className="comp_step_3-row-content-icon" />
            </div>
        </section>
        <section className="comp_step_3-row">
            <div className="comp_step_3-row-step">
                Step 3
                    </div>
            <div className="comp_step_3-row-content">
                <div className="comp_step_3-row-content-main">
                    <h1>寄送到家</h1>
                    <p>在证件的最后一页贴上白底证件照，签署中文姓名</p>
                </div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/BepCpOQgGGMpWAJiPiYZ.png" alt="" className="comp_step_3-row-content-icon" />
            </div>
        </section>
    </div>
}

function ComStep(props) {

    const { template } = props

    return (
        <div className="use-tag" style={{ position: "relative" }}>
            {
                template === 'step1' ?
                <Step1 /> : 
                template === 'step3' ? 
                <Step3 /> : ""
            }
        </div>
    )
}

export default React.memo(ComStep)