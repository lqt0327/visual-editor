import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

function CutList(props) {

    const { 
        changePanelStateDispatch,
        template,
        id,
        index,
        title,
        img_address,
        left_editor,
        desc
    } = props

    return (
        <div className="use-tag" id={id} data-index={index} style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch([left_editor,template],index)
        }}>
            <div>
                <a className="fd-link comp_list_news_h_6">
                    {
                        template === 'cutlist1' ? 
                        <h1 className="fd-title sub line-cut-1 comp_list_news_h_6-title">
                            {title}
                        </h1> : ''
                    }
                    <div className="fd-link fd-subject no-action rect-cover reverse comp_list_news_h_6-subject">
                        <div className="fd-subject-cover" style={{backgroundImage:"url("+img_address+")"}}></div>
                        <div className="fd-subject-content">
                            {
                                template === 'cutlist2' ? 
                                <h1 className="fd-title sub line-cut-2 title">
                                    {title}
                                </h1> : template === 'cutlist1' ?
                                <p className="fd-desc sub line-cut-3 comp_list_news_h_6-desc">{desc}</p> :
                                ""
                            }
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

CutList.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    img_address: PropTypes.string,
    desc: PropTypes.string
}

export default React.memo(CutList)