import React from 'react'
import './style.sass'

function Quote() {
    return (
        <div className="use-tag" style={{position: "relative"}}>
            <div className="comp_quote_4">
                <div className="fd-foreword has-left">
                    <div className="fd-foreword-left">
                        <svg viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" class="comp_quote_4-left"><g id="通用组件（113）" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="详情（32）" transform="translate(-503.000000, -105.000000)"><g id="Group-10" transform="translate(487.000000, 94.000000)"><g id="Group-7" transform="translate(16.000000, 11.114583)"><ellipse id="Oval" fill="#333333" cx="10" cy="10.1041667" rx="10" ry="10.1041667"></ellipse><text id="“" font-family="PingFangSC-Medium, PingFang SC" font-size="20" font-weight="400" fill="#FFFFFF"><tspan x="4" y="23.1666667">“</tspan></text></g></g></g></g></svg>
                    </div>
                    <div className="fd-foreword-body">
                        <quote className="comp_quote_4-text">云凤蝶的文化：客户第一，追求极致，勇于创新，开放共赢 / 云凤蝶的品牌定位：丰富、简单、个性、开放。</quote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Quote)