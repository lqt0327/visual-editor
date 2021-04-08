import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style.sass'

const Card1 = (props) => {
    const { tag, img_address, title, subtitle } = props
    return (
        <a className="fd-link fd-card shadowMode comp_list_card_1">
            <div className="fd-card-inner">
                <div className="fd-card-inner-head">
                    <a className="fd-link fd-jumbo size-lg">
                        <a className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url("+img_address+")" }}></a>
                        <div className="fd-jumbo-mask"></div>
                        <div className="fd-jumbo-content"></div>
                        <div className="fd-jumbo-tag">
                            <label htmlFor="">{tag}</label>
                        </div>
                    </a>
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
    const { tag, img_address, title, subtitle } = props
    return (
        <a className="fd-link fd-card comp_list_card_2">
            <div className="fd-card-inner">
                <div className="fd-card-inner-head">
                    <a className="fd-link fd-jumbo size-lg">
                        <a className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url("+img_address+")" }}></a>
                        <div className="fd-jumbo-mask"></div>
                        <div className="fd-jumbo-content">
                        </div>
                        <div className="fd-jumbo-tag">
                            <label htmlFor="">{tag}</label>
                        </div>
                    </a>
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

    const { imgUrl, tag, title, desc } = props

    return (
        <a className="fd-link comp_list_grid_1-jumbo">
            <a className="fd-link fd-jumbo size-md">
                <a className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></a>
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
        <a className="fd-link fd-jumbo size-md comp_list_grid_1-jumbo">
            <a className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></a>
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
        template,
        id,
        index,
        children,
        tag,
        img_address,
        left_editor,
        title,
        subtitle
    } = props

    return (
        <div className="use-tag" id={id} data-index={index} style={{ position: "relative" }} onClick={() => {
            changePanelStateDispatch([left_editor,template,index])
        }}>
            {
                template === 'cardlist2' ?
                <Card2
                    tag={tag}
                    img_address={img_address}
                    title={title}
                    subtitle={subtitle}
                /> :
                template === 'cardlist1' ?
                <Card1 
                    tag={tag}
                    img_address={img_address}
                    title={title}
                    subtitle={subtitle}
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
                                                            /> :
                                                            template === 'gridlist1' ?
                                                            <Grid1
                                                                imgUrl={item2.img_address}
                                                                title={item2.title}
                                                                desc={item2.subtitle}
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

GridList2.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    // children: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    //     title: PropTypes.string,
    //     subtitle: PropTypes.string,
    //     tag: PropTypes.string,
    //     img_address: PropTypes.string
    // }))),
    tag: PropTypes.string,
    title: PropTypes.string,
    img_address: PropTypes.string,
    subtitle: PropTypes.string
}

export default React.memo(GridList2)