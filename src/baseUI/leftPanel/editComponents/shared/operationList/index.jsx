import React, { useRef } from 'react';
import { Input } from 'antd';
import { Upload, LinkAddress, EditableTagGroup } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

const OperationPanel = (props) => {
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
            <h3>标题</h3>
            <Input key={content["title"]} defaultValue={content["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            <h3>标签</h3>
            <EditableTagGroup
                tagVal={content["tag"]}
                path={path}
                changeVal={changeVal}
            />
            <h3>地区</h3>
            <Input key={content["area"]} defaultValue={content["area"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "area"), 250)} />
            <h3>按钮</h3>
            <Input key={content["btn"]} defaultValue={content["btn"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "btn"), 250)} />
            {
                template === 'opt1' ? "" :
                    <React.Fragment>
                        <h3>图片</h3>
                        <Upload
                            imgHeight={56}
                            imgWidth={56}
                            changeVal={curried(path.current)}
                        />
                    </React.Fragment>
            }
            <LinkAddress linkVal={content["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(OperationPanel));