import React, { useRef } from 'react';
import { Input } from 'antd';
import { Upload, LinkAddress } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

const CardPanel = (props) => {
  const { 
    curried, 
    tpl,
    changeVal
  } = props

  const { content } = tpl

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={content["title"]} defaultValue={content["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            <h3>副标题</h3>
            <Input key={content["subtitle"]} defaultValue={content["subtitle"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "subtitle"), 250)} />
            <h3>标签</h3>
            <Input key={content["tag"]} defaultValue={content["tag"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "tag"), 250)} />
            <h3>图片</h3>
            <Upload
                imgHeight={320}
                imgWidth={686}
                changeVal={curried(path.current)}
            />
            <LinkAddress linkVal={content["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(CardPanel));