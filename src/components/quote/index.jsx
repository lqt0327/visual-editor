import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const Quote1 = (props) => {
  return (
    <div className="comp_quote_1">
      <div className="fd-foreword has-left">
        <div className="fd-foreword-left">
          <div className="comp_quote_1-left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAABGdBTUEAALGPC/xhBQAAAmBJREFUOBHFk7uLU2EQxW9uTAQJdhYJIhjYRbGSPAkqURSFQAS1sLIQ/wFhwU4j2ChbLD4QBBsLUbIsKBFWhK2WvMN2WvhgRUxhIWoCsnldf3PNhC8mETs/uDszZ8537tnJXMv6nyedTm/71/cr1zvrQi6Xs9vtdjYYDN7vdrt2s9ncmMUVPBaLHQmFQoudTicJ9+VUJ9Fo9GChUFh2HCcsl4iPJU47iURid7/fXxkMBjHpezyeuxInhBFNgz9DbKcQ5EDu/M7G/8bj8fler/cKdI/Rcbm2AViInkBw1RB9Y9t2tl6vPzJ5kuN0DqfrpCr6Ge7FQCBwRfojxzL0Vqt1D2y7NHC54fP5jpdKpa9S/3kQXQTbJTjcD36//1ixWPyovJFjRC8Bzg0b3yCemiXKCA7zX2WH3C0MnDRFBXeFIXnIrw6JEq5B/GLUYyluryuA29sYeKe1Rlc4lUqFAIIKEl8Y+bTU3QBpMNfVaQRxakUikaOENSXgQn4sP3Etk8k8ZKcH2pP1YhM+aQ1nmVx0qozkDu5/Ss91THNeCj2M5gLPeXbzAfu8orhEsH1mDe8cz1mem3xINUzukL7O2I3mBc25cJqv6ozWCP+NewCTl4WrjieGr0ISET9k1O+NfCKFmxRQHVd509R9FRLktkQ54XB4k/BW8hnnh+CucKPR+E5+YwZxwEsL2svn831qczW15Ua25Lkko3nVarUlLtwaY1lWB2yBT7pq4tRPqBd4HAN34C6h81Qwd92MppVMJvezTilIW16vd71cLm+afTPnC9zLjynz98EtVyqV19r/BaKo9c/mod9zAAAAAElFTkSuQmCC" alt="" className="comp_quote_1-left-quote" />
            <div className="comp_quote_1-left-line"></div>
          </div>
        </div>
        <div className="fd-foreword-body">
          <div className="comp_quote_1-text">
            {props.text}
          </div>
        </div>
      </div>
    </div>
  )
}

const Quote2 = (props) => {
  return (
    <div className="comp_quote_4">
      <div className="fd-foreword has-left">
        <div className="fd-foreword-left">
          <svg viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" className="comp_quote_4-left"><g id="通用组件（113）" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="详情（32）" transform="translate(-503.000000, -105.000000)"><g id="Group-10" transform="translate(487.000000, 94.000000)"><g id="Group-7" transform="translate(16.000000, 11.114583)"><ellipse id="Oval" fill="#333333" cx="10" cy="10.1041667" rx="10" ry="10.1041667"></ellipse><text id="“" fontFamily="PingFangSC-Medium, PingFang SC" fontSize="20" fontWeight="400" fill="#FFFFFF"><tspan x="4" y="23.1666667">“</tspan></text></g></g></g></g></svg>
        </div>
        <div className="fd-foreword-body">
          <div className="comp_quote_4-text">{props.text}</div>
        </div>
      </div>
    </div>
  )
}

function Quote(props) {

  const {
    template,
    text
  } = props

  return (
    <div className="use-tag">
      {
        template === 'quote1' ?
          <Quote1 text={text} /> :
          template === 'quote2' ?
            <Quote2 text={text} /> : ""
      }
    </div>
  )
}

Quote.propTypes = {
  text: PropTypes.string
}

export default React.memo(Quote)