import React, { useRef } from 'react';
import { Input } from 'antd';
import { Upload, LinkAddress } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

const ImgPanel = (props) => {
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
            {
                template === 'img2' ? 
                <React.Fragment>
                    <h3>描述</h3>
                    <Input key={content["desc"]} defaultValue={content["desc"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "desc"), 250)} />
                </React.Fragment> : ""
            }
            <h3>图片</h3>
            <Upload
                imgHeight={384}
                imgWidth={686}
                changeVal={curried(path.current)}
            />
            <LinkAddress linkVal={content["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(ImgPanel));