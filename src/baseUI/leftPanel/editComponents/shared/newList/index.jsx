import React, { useRef } from 'react';
import { Input } from 'antd';
import { Uploads, LinkAddress, EditableTagGroup } from "components";
import _ from 'lodash'
import CommonHoc from '../../common';

function NewPanel(props) {
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
            {
                template === 'newlist3' ? 
                    <React.Fragment>
                        <h3>图片</h3>
                        <Uploads
                            imgHeight={56}
                            imgWidth={56}
                        />
                    </React.Fragment> : ""
            }
            <LinkAddress linkVal={content["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(NewPanel));