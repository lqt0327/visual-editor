import React from 'react';
import './style.sass'

const Btn3 = () => {
    return (
        <footer className="fd-fixed-footer comp_btn_full">
            <div className="fd-fixed-footer-inner">
                <button className="fd-button comp_btn_full-btn" style={{ background: "rgb(229,177,101)" }} type="button">提交</button>
            </div>
        </footer>
    )
}

const Btn2 = () => {
    return (
        <footer className="fd-fixed-footer comp_btn_stick">
            <div className="fd-fixed-footer-inner">
                <div className="comp_btn_stick-wrap">
                    <button className="fd-button comp_btn_stick-btn" style={{ background: "rgb(229,177,101)" }} type="button">提交</button>
                </div>
            </div>
        </footer>
    )
}

function ComButton(props) {
    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            {
                template === 'btn3' ? 
                <Btn3 /> :
                template === 'btn2' ?
                <Btn2 /> : ""
            }
        </div>
    )
}

export default React.memo(ComButton)