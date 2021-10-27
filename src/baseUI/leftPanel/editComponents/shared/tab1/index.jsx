import React, { useRef } from 'react';
import { Collapse, Input } from 'antd';
import { Upload, LinkAddress } from "components";
import _ from 'lodash'
import { DeleteOutlined } from '@ant-design/icons';
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

const Tab1 = (props) => {
  const {
    curried,
    tpl,
    changeVal
  } = props

  const path = useRef([])

  return (
    <div className="schema-editor-container">
      <Collapse accordion onChange={(e) => {
        path.current = [e]
      }}>
        {
          tpl.children.map((item, i) => {
            return (
              <Panel header={item["label"]} key={i} extra={genExtra()}>
                <h3>标签</h3>
                <Input key={item["label"]} defaultValue={item["label"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "label"), 250)} />
                <h3>内容</h3>
                <Collapse accordion onChange={(j) => {
                  path.current = [i, j]
                }}>
                  {
                    item.children.map((item2, j) => {
                      return (
                        <Panel header={item2["title"]} key={j} extra={genExtra()}>
                          <h3>标题</h3>
                          <Input key={item2["title"]} defaultValue={item2["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
                          <h3>封面</h3>
                          <Upload
                            imgHeight={144}
                            imgWidth={220}
                            changeVal={curried(path.current)}
                          />
                          <LinkAddress linkVal={item2["link_address"]} changeVal={curried(path.current)} />
                        </Panel>
                      )
                    })
                  }
                </Collapse>
                <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
              </Panel>
            )
          })
        }
      </Collapse>
      <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
    </div>
  )
}

export default CommonHoc(React.memo(Tab1))