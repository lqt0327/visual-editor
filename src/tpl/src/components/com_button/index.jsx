import React from 'react';
import './style.sass'

const Btn3 = (props) => {

    const { text } = props

    return (
        <footer className="fd-fixed-footer comp_btn_full">
            <div className="fd-fixed-footer-inner">
                <button className="fd-button comp_btn_full-btn" style={{ background: "rgb(229,177,101)" }} type="button">{text}</button>
            </div>
        </footer>
    )
}

const Btn2 = (props) => {

    const { text } = props

    return (
        <footer className="fd-fixed-footer comp_btn_stick">
            <div className="fd-fixed-footer-inner">
                <div className="comp_btn_stick-wrap">
                    <button className="fd-button comp_btn_stick-btn" style={{ background: "rgb(229,177,101)" }} type="button">{text}</button>
                </div>
            </div>
        </footer>
    )
}

function ComButton(props) {
    const { 
        template,
        text
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }}>
            {
                template === 'btn3' ? 
                <Btn3
                    text={text}
                /> :
                template === 'btn2' ?
                <Btn2
                    text={text}
                /> : ""
            }
        </div>
    )
}

export default React.memo(ComButton)