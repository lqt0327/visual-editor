import React from 'react'
import cx from 'classnames'
import './style.sass'

const Card1 = () => {
    return (
        <a href="" className="fd-link fd-card shadowMode comp_list_card_1">
            <div className="fd-card-inner">
                <div className="fd-card-inner-head">
                    <a href="" className="fd-link fd-jumbo size-lg">
                        <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{backgroundImage:"url('https://gw.alipayobjects.com/zos/rmsportal/uEzOwVPOgaIuMJUACDIg.png')"}}></a>
                        <div className="fd-jumbo-mask"></div>
                        <div className="fd-jumbo-content"></div>
                        <div className="fd-jumbo-tag">
                            <label htmlFor="">旅行</label>
                        </div>
                    </a>
                </div>
                <div className="fd-card-inner-body">
                    <h1 className="fd-title">海外旅行</h1>
                </div>
                <div className="fd-card-inner-tail">
                    <p className="fd-desc">多国特色签证</p>
                </div>
            </div>
        </a>
    )
}

const Card2 = (props) => {
    return (
        <a href="" className="fd-link fd-card comp_list_card_2">
            <div className="fd-card-inner">
                <div className="fd-card-inner-head">
                    <a href="" className="fd-link fd-jumbo size-lg">
                        <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url('https://gw.alipayobjects.com/zos/rmsportal/oJkYKPiBOAQUkFnyhFfW.png')" }}></a>
                        <div className="fd-jumbo-mask"></div>
                        <div className="fd-jumbo-content">
                        </div>
                        <div className="fd-jumbo-tag">
                            <label htmlFor="">商务</label>
                        </div>
                    </a>
                </div>
                <div className="fd-card-inner-body">
                    <h1 className="fd-title">商务出行</h1>
                </div>
                <div className="fd-card-inner-tail">
                    <p className="fd-desc">出国工作安心无忧</p>
                </div>
            </div>
        </a>
    )
}

const Grid2 = (props) => {

    const { imgUrl, tag, title, desc } = props

    return (
        <a href="" className="fd-link comp_list_grid_1-jumbo">
            <a href="" className="fd-link fd-jumbo size-md">
                <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></a>
                <div className="fd-jumbo-mask"></div>
                <div className="fd-jumbo-content">
                </div>
                <div className="fd-jumbo-tag">
                    <label htmlFor="">{tag}</label>
                </div>
            </a>
            <h1 className="fd-title line-cut-1 comp_list_grid_3-item-title">{title}</h1>
            <p className="fd-desc line-cut-1 comp_list_grid_3-item-desc">{desc}</p>
        </a>
    )
}

const Grid1 = (props) => {

    const { imgUrl, title, desc } = props

    return (
        <a href="" className="fd-link fd-jumbo size-md comp_list_grid_1-jumbo">
            <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></a>
            <div className="fd-jumbo-mask"></div>
            <div className="fd-jumbo-content">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </a>
    )
}

function GridList2(props) {

    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            {
                template === 'card2' ? 
                <Card2 /> :
                template === 'card1' ?
                <Card1 /> :
                <div className={cx("fd-grid", {
                    "comp_list_grid_3": template === 'grid2' ? true : false,
                    "comp_list_grid_1": template === 'grid1' ? true : false
                })}>
                    <div className="fd-grid-row">
                        <div className="fd-grid-col">
                            {
                                template === 'grid2' ?
                                    <Grid2
                                        imgUrl="https://gw.alipayobjects.com/zos/rmsportal/ZnGdPxoHrVXmGUqXouiU.png"
                                        tag="旅行"
                                        title="海外旅行"
                                        desc="多国特色签证"
                                    /> :
                                    template === 'grid1' ?
                                        <Grid1
                                            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/ZnGdPxoHrVXmGUqXouiU.png"
                                            title="俄罗斯"
                                            desc="世界杯免签办理"
                                        /> : ''
                            }
                        </div>
                        <div className="fd-grid-col">
                            {
                                template === 'grid2' ?
                                    <Grid2
                                        imgUrl="https://gw.alipayobjects.com/zos/rmsportal/FpAKgrtDMKTXhIVdVfIj.png"
                                        tag="留学"
                                        title="出国留学"
                                        desc="全方位留学服务"
                                    /> :
                                    template === 'grid1' ?
                                        <Grid1
                                            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/rnLarHmjMpKasWVMFVnZ.png"
                                            title="新西兰"
                                            desc="家庭签证"
                                        /> : ''
                            }
                        </div>
                    </div>
                    <div className="fd-grid-row">
                        <div className="fd-grid-col">
                            {
                                template === 'grid2' ?
                                    <Grid2
                                        imgUrl="https://gw.alipayobjects.com/zos/rmsportal/KmzovGuElReNFnhykhMf.png"
                                        tag="商务"
                                        title="商务出行"
                                        desc="出国工作安心无忧"
                                    /> :
                                    template === 'grid1' ?
                                        <Grid1
                                            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/ifSqazvXgwLdBYrWNFQk.png"
                                            title="马来西亚"
                                            desc="旅游电子签证"
                                        /> : ''
                            }
                        </div>
                        <div className="fd-grid-col">
                            {
                                template === 'grid2' ?
                                    <Grid2
                                        imgUrl="https://gw.alipayobjects.com/zos/rmsportal/RfVtHjHOpezICADhNcxh.png"
                                        tag="资产"
                                        title="资产配置"
                                        desc="沪港深基金连接境内外"
                                    /> :
                                    template === 'grid1' ?
                                        <Grid1
                                            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/vXNwQdxjBZPdAMNaHiKy.png"
                                            title="日本"
                                            desc="签证快捷办理"
                                        /> : ''
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default React.memo(GridList2)