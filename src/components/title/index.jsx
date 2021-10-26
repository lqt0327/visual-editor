import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const Normal2 = (props) => {
  return (
    <div className="comp_title_normal_2">
      <div className="fd-title">{props.title}</div>
    </div>
  )
}

const Normal1 = (props) => {
  return (
    <div className="comp_title_normal_1">
      <div className="fd-title">{props.title}</div>
    </div>
  )
}

const Dot3 = (props) => {
  return (
    <div className="comp_title_dot_5">
      <h1 className="fd-title-dot">
        <span className="fd-title-dot-marker">
          <span className="comp_title_dot_5-marker" style={{ backgroundColor: "rgb(98, 96, 225)" }}></span>
        </span>
        <span className="fd-title-dot-txt">{props.title}</span>
      </h1>
    </div>
  )
}

const Dot2 = (props) => {
  return (
    <div className="comp_title_dot_4">
      <h1 className="fd-title-dot">
        <span className="fd-title-dot-marker">
          <span className="comp_title_dot_4-marker" style={{ borderColor: "rgb(98, 96, 225)" }}></span>
        </span>
        <span className="fd-title-dot-txt">{props.title}</span>
      </h1>
    </div>
  )
}

const Dot1 = (props) => {
  return (
    <div className="comp_title_dot_3">
      <h1 className="fd-title-dot">
        <span className="fd-title-dot-marker">
          <span className="comp_title_dot_3-marker" style={{ backgroundColor: "rgb(98, 96, 225)" }}></span>
        </span>
        <span className="fd-title-dot-txt">{props.title}</span>
      </h1>
    </div>
  )
}

const Block1 = (props) => {
  return (
    <h1 className="fd-title-block comp_title_block_8">
      <span className="fd-title-block-marker">
        <i className="comp_title_block_8-marker" style={{ backgroundColor: "rgb(255, 158, 26)" }}></i>
      </span>
      <span className="fd-title-block-txt">{props.title}</span>
      <span className="fd-title-block-marker">
        <i className="comp_title_block_8-marker" style={{ backgroundColor: "rgb(255, 158, 26)" }}></i>
      </span>
    </h1>
  )
}

function Title(props) {

  const {
    template,
    title
  } = props

  return (
    <div className="use-tag">
      {
        template === 'normal2' ?
          <Normal2 title={title} /> :
          template === 'normal1' ?
            <Normal1 title={title} /> :
            template === 'dot3' ?
              <Dot3 title={title} /> :
              template === 'dot2' ?
                <Dot2 title={title} /> :
                template === 'dot1' ?
                  <Dot1 title={title} /> :
                  template === 'block1' ?
                    <Block1 title={title} /> : ""
      }
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

export default React.memo(Title)