import React from 'react'
import cx from 'classnames'
import './style.sass'

function NewList(props) {

    const { template } = props

    return (
        <div className="use-tag" style={{position:"relative"}}>
            <div>
                <div className="fd-link fd-card comp_list_news_v_3">
                    <div className="fd-card-inner">
                        <div className="fd-card-inner-head">
                            <h1 className="fd-title title">为什么这么多大企业都是云凤蝶的忠实用户？</h1>
                        </div>
                        <div className="fd-card-inner-body">
                            <div className="fd-grid gutter-sm">
                                <div className="fd-grid-row">
                                    <div className="fd-grid-col">
                                        <a href="" className="fd-link fd-cover cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/QncRkuaOpqaYLBoxyEmW.png')"}}></a>
                                    </div>
                                    <div className="fd-grid-col">
                                        <a href="" className="fd-link fd-cover cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/idMzNdbVOavlarSCCWEL.png')"}}></a>
                                    </div>
                                    <div className="fd-grid-col">
                                        <a href="" className="fd-link fd-cover cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/PfeIDYodSsakxpFemfZd.png')"}}></a>
                                    </div>
                                </div>
                                <div className="fd-grid-row">
                                    <div className="fd-grid-col">
                                        <a href="" className="fd-link fd-cover cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/kLpVGRlmVkhSVpqyBxKj.png')"}}></a>
                                    </div>
                                    <div className="fd-grid-col">
                                        <a href="" className="fd-link fd-cover cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/gWYqjqJFBRTNhRNYrQkE.png')"}}></a>
                                    </div>
                                    <div className="fd-grid-col">
                                        <a href="" className="fd-link fd-cover cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/lKDrgTiyERvYSeMvdirE.png')"}}></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fd-card-inner-tail">
                            <span className="fd-tag-list undefined">
                                <label>
                                    <p className="fd-desc sub">市场</p>
                                </label>
                                <label>
                                    <p className="fd-desc sub">第一财经</p>
                                </label>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(NewList)