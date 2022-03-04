import React, { useRef } from 'react';
import { Input } from 'antd';
import { Upload, LinkAddress } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

const { TextArea } = Input;

const CutPanel = (props) => {
  const { 
    curried, 
    tpl,
    template,
    changeVal
  } = props

  const { content } = tpl

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={content["title"]} defaultValue={content["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            {
                template === 'cutlist2' ? "" :
                    <React.Fragment>
                        <h3>描述</h3>
                        <TextArea 
                        key={content["desc"]}
                        defaultValue={content["desc"]} 
                        onChange={_.debounce((e) => changeVal(path.current, e.target.value, "desc"), 250)} 
                        rows={4}
                        />
                    </React.Fragment>
            }
            <h3>图片</h3>
            <Upload
                imgHeight={144}
                imgWidth={220}
                changeVal={curried(path.current)}
            />
            <LinkAddress linkVal={content["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(CutPanel));