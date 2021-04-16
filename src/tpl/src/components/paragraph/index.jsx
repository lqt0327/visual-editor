import React from 'react'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/tomorrow-night-bright.css';
import './style.sass'

const Detail3 = (props)=>{
    const { title, tag } = props
    return (
        <section className="comp_detail_3">
            <h1 className="fd-title comp_detail_3-title">
                {title}
            </h1>
            <div className="comp_detail_3-desc">
                <span className="fd-tag-list comp_detail_3-desc-tags">
                    {
                        tag.map((item,i)=>{
                            return (
                                <label htmlFor="" key={i}>
                                    <p className="fd-desc" style={{color:"rgb(252, 101, 101)"}}>{item}</p>
                                </label>
                            )
                        })
                    }
                </span>
            </div>
        </section>
    )
}

const ParLeft3 = (props) => {
    const { title, content } = props
    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    return (
        <div className="comp_detail_par_left_3">
            <h1 className="fd-title-dot comp_detail_par_left_3-header">
                <span className="fd-title-dot-marker">
                    <i className="comp_detail_par_left_3-header-marker" style={{backgroundColor:"rgb(98, 96, 225)"}}></i>
                </span>
                <span className="fd-title-dot-txt">{title}</span>
            </h1>
            <div className="comp_detail_par_left_3-content" dangerouslySetInnerHTML={{__html:marked(content)}}>
            </div>
        </div>
    )
}

function Paragraph(props) {

    const { 
        template,
        title,
        content,
        tag
    } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            {
                template === 'parleft3' ? 
                <ParLeft3
                    title={title}
                    content={content}
                /> :
                template === 'detail3' ? 
                <Detail3 
                    title={title}
                    content={content}
                    tag={tag}
                /> : ''
            }
        </div>
    )
}

export default React.memo(Paragraph)