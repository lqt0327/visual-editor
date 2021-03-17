import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

function RowList(props) {

    const { 
        changePanelStateDispatch,
        template,
        id,
        children
    } = props

    return (
        <div className="use-tag" id={id} style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch({
                currentPanel: ['banner','static'],
                currentId: id
            })
        }}>
            <div className="fd-grid comp_list_v_1">
                {
                    children.map((_,i)=>{
                        return (
                            <div className="fd-grid-row" key={i}>
                                <div className="fd-grid-col">
                                    <div className="fd-link fd-jumbo size-mdx comp_list_v_1-jumbo">
                                        <a 
                                            href="" 
                                            className="fd-link fd-cover fd-jumbo-cover"
                                            style={{backgroundImage:'url('+_.img_address+')'}}
                                        >
                                        </a>
                                        <div className="fd-jumbo-mask"></div>
                                        <div className="fd-jumbo-content">{_.title}</div>
                                        <div className="fd-jumbo-tag">
                                            <label htmlFor="">{_.tag}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

RowList.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        link_address: PropTypes.string,
        img_address: PropTypes.string,
        title: PropTypes.string,
        tag: PropTypes.string
    }))
}

export default React.memo(RowList)