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

const Tab2 = (props) => {
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
                <h3>文案</h3>
                <Input key={item["label"]} defaultValue={item["label"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "label"), 250)} />
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

export default CommonHoc(React.memo(Tab2))