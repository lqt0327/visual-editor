import React from 'react'
import './style.sass'

const Normal2 = () => {
    return (
        <div className="comp_title_normal_2">
            <div className="fd-title">标题</div>
        </div>
    )
}

const Normal1 = () => {
    return (
        <div className="comp_title_normal_1">
            <div className="fd-title">标题</div>
        </div>
    )
}

const Dot5 = () => {
    return (
        <div className="comp_title_dot_5">
            <h1 className="fd-title-dot">
                <span className="fd-title-dot-marker">
                <span className="comp_title_dot_5-marker" style={{backgroundColor:"rgb(98, 96, 225)"}}></span>
                </span>
                <span className="fd-title-dot-txt">标题</span>
            </h1>
        </div>
    )
}

const Dot4 = () => {
    return (
        <div className="comp_title_dot_4">
            <h1 className="fd-title-dot">
                <span className="fd-title-dot-marker">
                <span className="comp_title_dot_4-marker" style={{borderColor:"rgb(98, 96, 225)"}}></span>
                </span>
                <span className="fd-title-dot-txt">标题</span>
            </h1>
        </div>
    )
}

const Dot3 = () => {
    return (
        <div className="comp_title_dot_3">
            <h1 className="fd-title-dot">
                <span className="fd-title-dot-marker">
                <span className="comp_title_dot_3-marker" style={{backgroundColor:"rgb(98, 96, 225)"}}></span>
                </span>
                <span className="fd-title-dot-txt">标题</span>
            </h1>
        </div>
    )
}

const Block8 = () => {
    return (
        <h1 className="fd-title-block comp_title_block_8">
            <span className="fd-title-block-marker">
                <i className="comp_title_block_8-marker" style={{backgroundColor:"rgb(255, 158, 26)"}}></i>
            </span>
            <span className="fd-title-block-txt">标题</span>
            <span className="fd-title-block-marker">
                <i className="comp_title_block_8-marker" style={{backgroundColor:"rgb(255, 158, 26)"}}></i>
            </span>
        </h1>
    )
}

function Title(props) {

    const { template } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            {
                template === 'normal2' ? 
                <Normal2 /> : 
                template === 'normal1' ? 
                <Normal1 /> :
                template === 'dot5' ? 
                <Dot5 /> : 
                template === 'dot4' ? 
                <Dot4 /> : 
                template === 'dot3' ? 
                <Dot3 /> : 
                template === 'block8' ? 
                <Block8 /> : ""
            }
        </div>
    )
}

export default React.memo(Title)