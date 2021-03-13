import React from 'react'
import cx from 'classnames'
import './style.sass'

function NewList2(props) {

    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template
    } = props

    return (
        <div className="use-tag" style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <div>
                <a href="" className="fd-link comp_list_news_h_6">
                    {
                        template === 'cut1' ? 
                        <h1 className="fd-title sub line-cut-1 comp_list_news_h_6-title">
                            为什么这么多大企业都是云凤蝶的忠实用户？
                        </h1> : ''
                    }
                    <a href="" className="fd-link fd-subject no-action rect-cover reverse comp_list_news_h_6-subject">
                        <div className="fd-subject-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/ebuQSFOLCrYqpCHmfxll.png')"}}></div>
                        <div className="fd-subject-content">
                            {
                                template === 'cut2' ? 
                                <h1 className="fd-title sub line-cut-2 title">
                                    为什么这么多大企业都是云凤蝶的忠实用户？
                                </h1> : template === 'cut1' ?
                                <p className="fd-desc sub line-cut-3 comp_list_news_h_6-desc">无需搭建开发环境和部署服务器，基于开发者工具，使用丰富的 UI 组件和行业模板研发 H5</p> :
                                ""
                            }
                        </div>
                    </a>
                </a>
            </div>
        </div>
    )
}

export default React.memo(NewList2)