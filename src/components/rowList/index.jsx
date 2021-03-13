import React from 'react'
import './style.sass'

function RowList(props) {

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
            <div className="fd-grid comp_list_v_1">
                {
                    new Array(4).fill(null).map((_,i)=>{
                        return (
                            <div className="fd-grid-row" key={i}>
                                <div className="fd-grid-col">
                                    <div className="fd-link fd-jumbo size-mdx comp_list_v_1-jumbo">
                                        <a 
                                            href="" 
                                            className="fd-link fd-cover fd-jumbo-cover"
                                            style={{backgroundImage:'url("https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png")'}}
                                        >
                                        </a>
                                        <div className="fd-jumbo-mask"></div>
                                        <div className="fd-jumbo-content">银行存款证明</div>
                                        <div className="fd-jumbo-tag">
                                            <label htmlFor="">金融</label>
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

export default React.memo(RowList)