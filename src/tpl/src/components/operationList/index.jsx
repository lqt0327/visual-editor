import React from 'react'
import cx from 'classnames'
import './style.sass'

function OperationList(props) {

    const { 
        template,
        title,
        tag,
        area,
        img_address,
        link_address,
        btn
    } = props

    return (
        <div className="use-tag" style={{position:'relative'}}>
            <div>
                <a className="fd-link fd-subject comp_list_operation_1">
                    <div className={cx({"fd-subject-cover":template === 'opt1' ? false : true})} style={{backgroundImage:"url("+img_address+")"}}></div>
                    <div className="fd-subject-content">
                        <div>
                            <h1 className="fd-title title">{title}</h1>
                            <span className="fd-tag-list tag-list">
                                {
                                    tag.map((item,i)=>{
                                        return (
                                            <label key={i}>
                                                <p className="fd-desc" style={{color:"rgb(252,101,101)"}}>{item}</p>
                                            </label>
                                        )
                                    })
                                }
                            </span>
                            <p className="fd-desc desc">{area}</p>
                        </div>
                    </div>
                    <div className="fd-subject-action">
                        <button className="fd-button" onClick={()=>window.open(link_address,"_self")}>{btn}</button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default React.memo(OperationList)