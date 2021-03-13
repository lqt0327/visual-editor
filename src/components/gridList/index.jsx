import React from 'react'
import cx from 'classnames'
import './style.sass'

function GridList(props) {

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
            <div className="fd-grid comp_list_grid_5">
                <div className="fd-grid-row">
                    <div className="fd-grid-col">
                        <a href="" className="fd-link comp_list_grid_5-item">
                            <a href="" className="fd-link fd-jumbo size-sm">
                                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/wWQZevyGptOADcEhscIp.png')"}}></a>
                                <div className="fd-jumbo-mask"></div>
                                <div className="fd-jumbo-content">
                                    <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    海外旅行
                                    </h1>
                                </div>
                            </a>
                        </a>
                    </div>
                    <div className="fd-grid-col">
                        <a href="" className="fd-link comp_list_grid_5-item">
                            <a href="" className="fd-link fd-jumbo size-sm">
                                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/YVtEOLbGeJXCFrOARpLS.png')"}}></a>
                                <div className="fd-jumbo-mask"></div>
                                <div className="fd-jumbo-content">
                                    <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    海外旅行
                                    </h1>
                                </div>
                            </a>
                        </a>
                    </div>
                    <div className="fd-grid-col">
                        <a href="" className="fd-link comp_list_grid_5-item">
                            <a href="" className="fd-link fd-jumbo size-sm">
                                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/iHEPGHUfgKMuIJhnmYCk.png')"}}></a>
                                <div className="fd-jumbo-mask"></div>
                                <div className="fd-jumbo-content">
                                    <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    海外旅行
                                    </h1>
                                </div>
                            </a>
                        </a>
                    </div>
                </div>
                <div className="fd-grid-row">
                    <div className="fd-grid-col">
                        <a href="" className="fd-link comp_list_grid_5-item">
                            <a href="" className="fd-link fd-jumbo size-sm">
                                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/VJeIDTUhhgZbEOAZcXeE.png')"}}></a>
                                <div className="fd-jumbo-mask"></div>
                                <div className="fd-jumbo-content">
                                    <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    海外旅行
                                    </h1>
                                </div>
                            </a>
                        </a>
                    </div>
                    <div className="fd-grid-col">
                        <a href="" className="fd-link comp_list_grid_5-item">
                            <a href="" className="fd-link fd-jumbo size-sm">
                                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/MsBVFalmPzPZWnovieJz.png')"}}></a>
                                <div className="fd-jumbo-mask"></div>
                                <div className="fd-jumbo-content">
                                    <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    海外旅行
                                    </h1>
                                </div>
                            </a>
                        </a>
                    </div>
                    <div className="fd-grid-col">
                        <a href="" className="fd-link comp_list_grid_5-item">
                            <a href="" className="fd-link fd-jumbo size-sm">
                                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/IJPHFytoWJjCBrKTQxhx.png')"}}></a>
                                <div className="fd-jumbo-mask"></div>
                                <div className="fd-jumbo-content">
                                    <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    海外旅行
                                    </h1>
                                </div>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GridList)