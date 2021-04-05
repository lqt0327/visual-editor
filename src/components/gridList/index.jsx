import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style.sass'

const GridCol = (props) => {
    const { arr } = props
    return (
        arr.map((item2, j) => {
            return (
                <div className="fd-grid-col" key={j}>
                    <a href="" className="fd-link comp_list_grid_5-item">
                        <a href="" className="fd-link fd-jumbo size-sm">
                            <a href="" className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url("+item2.img_address+")" }}></a>
                            <div className="fd-jumbo-mask"></div>
                            <div className="fd-jumbo-content">
                                <h1 className="fd-title line-cut-1 comp_list_grid_5-item-title">
                                    {item2.tag}
                                </h1>
                            </div>
                        </a>
                    </a>
                </div>
            )
        })
    )
}

function GridList(props) {

    const {
        changePanelStateDispatch,
        template,
        id,
        index,
        children
    } = props

    return (
        <div className="use-tag" id={id} data-index={index} style={{ position: "relative" }} onClick={() => {
            changePanelStateDispatch(['banner','static'])
        }}>
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
    changePanelStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        tag: PropTypes.string,
        img_address: PropTypes.string
    })))
}

export default React.memo(GridList)