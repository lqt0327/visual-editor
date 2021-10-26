import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const GridCol = (props) => {
    const { arr } = props
    return (
        arr.children.map((item2, j) => {
            return (
                <div className="fd-grid-col" key={j}>
                    <a className="fd-link comp_list_grid_5-item">
                        <div className="fd-link fd-jumbo size-sm">
                            <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url("+item2.img_address+")" }}></div>
                            <div className="fd-jumbo-mask"></div>
                            <div className="fd-jumbo-content">
                                <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    {item2.title}
                                </h1>
                            </div>
                        </div>
                    </a>
                </div>
            )
        })
    )
}

function GridList(props) {

    const {
        children
    } = props

    return (
        <div className="use-tag">
            <div className="fd-grid comp_list_grid_5">
                {
                    children.map((item, i) => {
                        return (
                            <div className="fd-grid-row" key={i}>
                                <GridCol
                                    arr={item}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

GridList.propTypes = {
    // children: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    //     tag: PropTypes.string,
    //     img_address: PropTypes.string
    // })))
}

export default React.memo(GridList)