import React, { useRef } from 'react';
import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress } from "components";
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
    tpl
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
              <Panel header={`This is panel header ${i + 1}`} key={i} extra={genExtra()}>
                <Upload
                  imgWidth={750}
                  imgHeight={280}
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

export default CommonHoc(React.memo(CarouselPanel));