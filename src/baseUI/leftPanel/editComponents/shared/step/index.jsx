import React, { useRef } from 'react';
import { Collapse, Input } from 'antd';
import { Upload } from "components";
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
          tpl.content.map((item, i) => {
            return (
              <Panel header={item["step"]} key={i} extra={genExtra()}>
                <h3>步骤</h3>
                <Input key={item["step"]} defaultValue={item["step"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "step"), 250)} />
                <h3>标题</h3>
                <Input key={item["title"]} defaultValue={item["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
                <h3>描述</h3>
                <Input key={item["desc"]} defaultValue={item["desc"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "desc"), 250)} />
                <h3>图片</h3>
                <Upload
                  imgHeight={56}
                  imgWidth={56}
                  changeVal={curried(path.current)}
                />
              </Panel>
            )
          })
        }
      </Collapse>
      <div className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</div>
    </div>
  )
}

export default CommonHoc(React.memo(Tab2))