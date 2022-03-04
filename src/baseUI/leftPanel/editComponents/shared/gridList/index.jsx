import React, { useRef } from 'react';
import { Collapse, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Uploads, LinkAddress } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

const { Panel } = Collapse;

const genExtra = () => (
  <DeleteOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      // event.stopPropagation();
      console.log('delete')
    }}
  />
);

function CarouselPanel(props) {
  const {
    curried,
    tpl,
    changeVal,
    template
  } = props

  const { content } = tpl

  const path = useRef([])

  return (
    <div className="schema-editor-container">
      <Collapse accordion onChange={(key) => {
        path.current = [key]
      }}>
        {
          content.map((item, i) => {
            return (
              <Panel header={`This is ${i + 1}`} key={i} extra={genExtra()}>
                <Collapse accordion onChange={(j) => {
                  path.current = [i, j]
                }}>
                  {
                    item.children.map((item2, j) => {
                      return (
                        <Panel header={item2["title"]} key={j} extra={genExtra()}>
                          <h3>标题</h3>
                          <Input key={item2["title"]} defaultValue={item2["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
                          {
                            template === 'gridlist3' ? "" :
                              <React.Fragment>
                                <h3>副标题</h3>
                                <Input key={item2["subtitle"]} defaultValue={item2["subtitle"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "subtitle"), 250)} />
                              </React.Fragment>
                          }
                          {
                            template === 'gridlist2' ?
                              <React.Fragment>
                                <h3>标签</h3>
                                <Input key={item2["tag"]} defaultValue={item2["tag"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "tag"), 250)} />
                              </React.Fragment> : ""
                          }
                          <Uploads
                            imgWidth={750}
                            imgHeight={280}
                            maxlist={item.children.length}
                          />
                          <LinkAddress linkVal={item2["link_address"]} changeVal={curried(path.current)} />
                        </Panel>
                      )
                    })
                  }
                </Collapse>
              </Panel>
            )
          })
        }
      </Collapse>
      <div className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</div>
    </div>
  )
}

export default CommonHoc(React.memo(CarouselPanel));