import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const EnteryNormal = styled.div`
    .comp_entry_normal_1 {
        display: flex;
        padding: 16px;
        justify-content: space-between;
        flex-wrap: nowrap;
        font-size: 0;

        &-item {
            text-align: center;
            text-decoration: none;
            
            img {
                display: inline-block;
                margin-bottom: 8px;
                width: 28px;
                height: 28px;
            }

            p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display: block;
                font-size: 13px;
                color: #333;
            }
        }
    }
`

function EntryTab(props) {

  const {
    children,
  } = props

  return (
    <EnteryNormal>
      <div className="use-tag" style={{ position: "relative" }}>
        <section className="comp_entry_normal_1">
          {
            children.map((item, i) => {
              return (
                <a className="comp_entry_normal_1-item" style={{ width: "25%" }} key={i}>
                  <img src={item["img_address"]} alt="" />
                  <p>{item["label"]}</p>
                </a>
              )
            })
          }
        </section>
      </div>
    </EnteryNormal>
  )
}

EntryTab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    img_address: PropTypes.string,
    link_address: PropTypes.string
  }))
}

export default React.memo(EntryTab);