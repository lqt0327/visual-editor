import React from 'react'
import cx from 'classnames'
import './style.sass'

function OpertaionList(props) {

    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template
    } = props

    return (
        <div className="use-tag" style={{position:'relative'}} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <div>
                <a className="fd-link fd-subject comp_list_operation_1">
                    <div className={cx({"fd-subject-cover":template === 'opt1' ? false : true})} style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png')"}}></div>
                    <div className="fd-subject-content">
                        <div>
                            <h1 className="fd-title title">云凤蝶全栈工程师兼职</h1>
                            <span className="fd-tag-list tag-list">
                                <label>
                                    <p className="fd-desc" style={{color:"rgb(252,101,101)"}}>180元/小时</p>
                                </label>
                                <label>
                                    <p className="fd-desc">日结</p>
                                </label>
                            </span>
                            <p className="fd-desc desc">上城-区政府</p>
                        </div>
                    </div>
                    <div className="fd-subject-action">
                        <button className="fd-button">报名</button>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default React.memo(OpertaionList)