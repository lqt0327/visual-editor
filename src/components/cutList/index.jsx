import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

function CutList(props) {

    const { 
        template,
        title,
        img_address,
        link_address,
        desc
    } = props

    return (
        <div className="use-tag">
            <div>
                <a href={link_address} className="fd-link comp_list_news_h_6">
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
    title: PropTypes.string,
    img_address: PropTypes.string,
    link_address: PropTypes.string,
    desc: PropTypes.string
}

export default React.memo(CutList)