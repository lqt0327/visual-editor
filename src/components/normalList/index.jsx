import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'
import './style.sass'

const ListContent = styled.div`

`

function NormalList() {
    return (
        <div className="use-tag" style={{position:"relative"}}>
            <div>
                <a className={cx("fd-link fd-subject",{"reverse": true})}>
                    <div className="fd-subject-cover" style={{backgroundImage:'url("https://gw.alipayobjects.com/zos/rmsportal/ebuQSFOLCrYqpCHmfxll.png")'}}></div>
                    <div className="fd-subject-content">
                        <div>
                            <h1 className="fd-title title">为什么这么多大企业都是云凤蝶的忠实用户？</h1>
                            <span className="fd-tag-list">
                                <label>
                                    <p className="fd-desc">市场</p>
                                </label>
                                <label>
                                    <p className="fd-desc">第一财经</p>
                                </label>
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default React.memo(NormalList)