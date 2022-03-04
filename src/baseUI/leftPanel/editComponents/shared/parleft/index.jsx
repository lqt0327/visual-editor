import React, { useRef } from 'react';
import { Input } from 'antd';
import { EditableTagGroup } from 'components'
import _ from 'lodash'
import CommonHoc from '../../common';

const { TextArea } = Input;

const ParleftPanel = (props) => {
  const { 
    template,
    tpl,
    changeVal
  } = props

  const { content } = tpl

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <h3>标题</h3>
            <Input key={content["title"]} defaultValue={content["title"]} onChange={_.debounce((e) => changeVal(path.current, e.target.value, "title"), 250)} />
            {
                template === 'parleft3' ? 
                <React.Fragment>
                    <h3>描述</h3>
                    <TextArea 
                    key={content["text"]}
                    defaultValue={content["text"]} 
                    onChange={_.debounce((e) => changeVal(path.current, e.target.value, "text"), 250)} 
                    rows={4}
                    />
                </React.Fragment> : 
                template === 'detail3' ? 
                <React.Fragment>
                    <h3>标签</h3>
                    <EditableTagGroup
                        tagVal={content["tag"]}
                        path={path}
                        changeVal={changeVal}
                    />
                </React.Fragment> : ""
            }
        </div>
    )
}

export default CommonHoc(React.memo(ParleftPanel));