import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style.sass'

const ListContent = styled.div`

`

function NormalList(props) {

    const {  
        template,
        link_address,
        title,
        img_address,
        tag
    } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            <div>
                <a className={cx("fd-link fd-subject comp_list_normal_2",{"reverse": template === 'normal3' ? true : false})}>
                    <div className={cx("fd-subject-cover",{"hide": template === 'normal1' ? true : false})} style={{backgroundImage:'url('+img_address+')'}}></div>
                    <div className="fd-subject-content">
                        <div>
                            <h1 className="fd-title title">{title}</h1>
                            <span className="fd-tag-list">
                                {
                                    tag.map((item,i)=>{
                                        return (
                                            <label key={i}>
                                                <p className="fd-desc">{item}</p>
                                            </label>
                                        )
                                    })
                                }
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

NormalList.propTypes = {
    link_address: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.array,
    img_address:PropTypes.string
}

export default React.memo(NormalList)