import React from 'react'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/tomorrow-night-bright.css';
import './style.sass'

function ComFAQ(props){

    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    const { 
        template,
        title,
        content
    } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            <div className="comp_faq_normal_1">
                <section className="fd-desc-sect has-side">
                    <div className="fd-desc-sect-side">
                        {
                            template === 'faq1' ? 
                            <svg viewBox="0 0 20 23" version="1.1" xmlns="http://www.w3.org/2000/svg" className="comp_faq_normal_1-side"><g id="通用组件（113）" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="FAQ（6）" transform="translate(-80.000000, -102.000000)"><g id="FAQ---1" transform="translate(64.000000, 94.000000)"><g id="Group-3-Copy" transform="translate(16.000000, 8.000000)"><circle id="Oval-10-Copy" fill="#C0BFF3" cx="10" cy="13" r="10"></circle><circle id="Oval-10" fill="#6260E1" cx="10" cy="10" r="10"></circle><path d="M9.99278499,4 C11.5512266,4 12.7922078,4.52173913 13.7012987,5.58012422 C14.5670996,6.57888199 15,7.90559006 15,9.54534161 C15,11.1403727 14.5815296,12.4372671 13.7445887,13.4509317 C14.1197691,13.9726708 14.5093795,14.5093168 14.8845599,15.0757764 L13.8744589,16 C13.4848485,15.4186335 13.1096681,14.8670807 12.7344877,14.3453416 C11.969697,14.8223602 11.0606061,15.0608696 9.99278499,15.0608696 C8.41991342,15.0608696 7.17893218,14.5242236 6.28427128,13.4807453 C5.41847042,12.4670807 5,11.1552795 5,9.54534161 C5,7.92049689 5.41847042,6.60869565 6.28427128,5.59503106 C7.17893218,4.52173913 8.41991342,4 9.99278499,4 Z M9.99278499,5.4310559 C8.8961039,5.4310559 8.04473304,5.80372671 7.43867244,6.57888199 C6.86147186,7.30931677 6.57287157,8.2931677 6.57287157,9.54534161 C6.57287157,10.7826087 6.86147186,11.7664596 7.43867244,12.4968944 C8.04473304,13.242236 8.8961039,13.6298137 9.99278499,13.6298137 C10.7142857,13.6298137 11.3347763,13.4658385 11.8398268,13.152795 C11.3203463,12.4819876 10.8008658,11.8708075 10.2958153,11.3192547 L11.2049062,10.3950311 C11.7243867,10.9614907 12.2438672,11.5726708 12.7633478,12.1987578 C13.1962482,11.5130435 13.4126984,10.6335404 13.4126984,9.54534161 C13.4126984,8.26335404 13.1096681,7.26459627 12.5324675,6.53416149 C11.9408369,5.78881988 11.0894661,5.4310559 9.99278499,5.4310559 Z" id="Q" fill="#FFFFFF"></path></g></g></g></g></svg> :
                            template === 'faq2' ? 
                            <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="comp_faq_normal_2-side"><defs></defs><g id="通用组件（113）" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="FAQ（6）" transform="translate(-80.000000, -319.000000)"><g id="Group-5" transform="translate(64.000000, 310.000000)"><g id="Group-3" transform="translate(16.000000, 9.000000)"><rect id="Rectangle" x="0" y="0" width="20" height="20"></rect><g id="Group-2"><circle id="Oval-7" fillOpacity="0.4" fill="#6260E1" cx="7" cy="7" r="7"></circle><g id="Q" transform="translate(4.000000, 2.000000)"><mask id="mask-2" fill="white"><rect id="path-1" x="0" y="0" width="16" height="18"></rect></mask><g id="Mask"></g><text mask="url(#mask-2)" fontFamily="PingFangSC-Medium, PingFang SC" fontSize="21.6" fontWeight="400" fill="#333333"><tspan x="0" y="16">Q</tspan></text></g></g></g></g></g></g></svg> : ""
                        }
                    </div>
                    <div className="fd-desc-sect-content">
                        <div className="comp_faq_normal_1-body">
                            <h1 className="fd-title">{title}</h1>
                            <div 
                                className="comp_faq_normal_1-body-content"
                                dangerouslySetInnerHTML={{__html:marked(content)}}
                            >
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default React.memo(ComFAQ)