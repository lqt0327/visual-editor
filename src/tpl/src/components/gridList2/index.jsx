import React from 'react'
import cx from 'classnames'
import './style.sass'

const Card1 = (props) => {
    const { tag, img_address, title, subtitle, link_address } = props
    return (
        <a href={link_address} className="fd-link fd-card shadowMode comp_list_card_1">
            <div className="fd-card-inner">
                <div className="fd-card-inner-head">
                    <div className="fd-link fd-jumbo size-lg">
                        <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url("+img_address+")" }}></div>
                        <div className="fd-jumbo-mask"></div>
                        <div className="fd-jumbo-content"></div>
                        <div className="fd-jumbo-tag">
                            <label htmlFor="">{tag}</label>
                        </div>
                    </div>
                </div>
                <div className="fd-card-inner-body">
                    <h1 className="fd-title">{title}</h1>
                </div>
                <div className="fd-card-inner-tail">
                    <p className="fd-desc">{subtitle}</p>
                </div>
            </div>
        </a>
    )
}

const Card2 = (props) => {
    const { tag, img_address, title, subtitle, link_address } = props
    return (
        <a href={link_address} className="fd-link fd-card comp_list_card_2">
            <div className="fd-card-inner">
                <div className="fd-card-inner-head">
                    <div className="fd-link fd-jumbo size-lg">
                        <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url("+img_address+")" }}></div>
                        <div className="fd-jumbo-mask"></div>
                        <div className="fd-jumbo-content">
                        </div>
                        <div className="fd-jumbo-tag">
                            <label htmlFor="">{tag}</label>
                        </div>
                    </div>
                </div>
                <div className="fd-card-inner-body">
                    <h1 className="fd-title">{title}</h1>
                </div>
                <div className="fd-card-inner-tail">
                    <p className="fd-desc">{subtitle}</p>
                </div>
            </div>
        </a>
    )
}

const Grid2 = (props) => {

    const { imgUrl, tag, title, desc, link_address } = props

    return (
        <a href={link_address} className="fd-link comp_list_grid_1-jumbo">
            <div className="fd-link fd-jumbo size-md">
                <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></div>
                <div className="fd-jumbo-mask"></div>
                <div className="fd-jumbo-content">
                </div>
                <div className="fd-jumbo-tag">
                    <label htmlFor="">{tag}</label>
                </div>
            </div>
            <h1 className="fd-title line-cut-1 comp_list_grid_3-item-title">{title}</h1>
            <p className="fd-desc line-cut-1 comp_list_grid_3-item-desc">{desc}</p>
        </a>
    )
}

const Grid1 = (props) => {

    const { imgUrl, title, desc, link_address } = props

    return (
        <a href={link_address} className="fd-link fd-jumbo size-md comp_list_grid_1-jumbo">
            <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></div>
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
        template,
        children,
        tag,
        img_address,
        link_address,
        title,
        subtitle
    } = props

    return (
        <div className="use-tag" style={{ position: "relative" }}>
            {
                template === 'cardlist2' ?
                <Card2
                    tag={tag}
                    img_address={img_address}
                    title={title}
                    subtitle={subtitle}
                    link_address={link_address}
                /> :
                template === 'cardlist1' ?
                <Card1 
                    tag={tag}
                    img_address={img_address}
                    title={title}
                    subtitle={subtitle}
                    link_address={link_address}
                /> :
                <div className={cx("fd-grid", {
                    "comp_list_grid_3": template === 'gridlist2' ? true : false,
                    "comp_list_grid_1": template === 'gridlist1' ? true : false
                })}>
                    {
                        children.map((item, i) => {
                            return (
                                <div className="fd-grid-row" key={i}>
                                    {
                                        item.children.map((item2, j) => {
                                            return (
                                                <div className="fd-grid-col" key={j}>
                                                    {
                                                        template === 'gridlist2' ?
                                                            <Grid2
                                                                imgUrl={item2.img_address}
                                                                tag={item2.tag}
                                                                title={item2.title}
                                                                desc={item2.subtitle}
                                                                link_address={item2.link_address}
                                                            /> :
                                                            template === 'gridlist1' ?
                                                            <Grid1
                                                                imgUrl={item2.img_address}
                                                                title={item2.title}
                                                                desc={item2.subtitle}
                                                                link_address={item2.link_address}
                                                            /> : ''
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default React.memo(GridList2)