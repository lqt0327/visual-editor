import React, { useRef } from 'react';
import { Input, Collapse } from 'antd';
import { Upload, LinkAddress } from "components";
import { DeleteOutlined } from '@ant-design/icons';
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

const RowPanel = (props) => {
  const {
    curried,
    tpl,
    changeVal
  } = props

  const path = useRef([])

  return (
    <div className="schema-editor-container">
      <Collapse accordion onChange={(key) => {
        path.current = [key]
      }}>
        {
          tpl.children.map((item, i) => {
            return (
              <Panel header={item["title"]} key={i} extra={genExtra()}>
                <h3>标题</h3>
                <Input key={item["title"]} defaultValue={item["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
                <h3>标签</h3>
                <Input key={item["tag"]} defaultValue={item["tag"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "tag"), 250)} />
                <h3>图片</h3>
                <Upload
                  imgHeight={56}
                  imgWidth={56}
                  changeVal={curried(path.current)}
                />
                <LinkAddress linkVal={item["link_address"]} changeVal={curried(path.current)} />
              </Panel>
            )
          })
        }
      </Collapse>
      <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
    </div>
  )
}

export default CommonHoc(React.memo(RowPanel));