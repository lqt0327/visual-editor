import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

function NewList(props) {

  const {
    title,
    img_address,
    tag
  } = props

  return (
    <div className="use-tag">
      <div>
        <div className="fd-link fd-card comp_list_news_v_3">
          <div className="fd-card-inner">
            <div className="fd-card-inner-head">
              <h1 className="fd-title title">{title}</h1>
            </div>
            <div className="fd-card-inner-body">
              <div className="fd-grid gutter-sm">
                {
                  img_address.map((_, i) => {
                    return (
                      <div className="fd-grid-row" key={i}>
                        {
                          _.map((item, j) => {
                            return (
                              <div className="fd-grid-col" key={j}>
                                <a className="fd-link fd-cover cover" style={{ backgroundImage: "url(" + item + ")" }}></a>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="fd-card-inner-tail">
              <span className="fd-tag-list undefined">
                {
                  tag.map((item, k) => {
                    return (
                      <label key={k}>
                        <p className="fd-desc sub">{item}</p>
                      </label>
                    )
                  })
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

NewList.propTypes = {
  title: PropTypes.string,
  img_address: PropTypes.array,
  tag: PropTypes.array
}

export default React.memo(NewList)