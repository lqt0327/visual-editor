import React, { useRef } from 'react';
import { Input, Collapse } from 'antd';
import { Upload, LinkAddress } from "components";
import { DeleteOutlined } from '@ant-design/icons';
import _ from 'lodash'

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
        comp_i,
        pageData,
        changePageDataDispatch
    } = props
    const path = useRef([])
    const tpl = pageData[comp_i]

    const tplData = (path) => {
        if (path.length !== 0) {
            return path.reduce((pre, cur) => {
                if (pre !== 0) {
                    return pre.children[cur]
                }
                return tpl.children[cur]
            }, 0)
        } else {
            return tpl
        }
    }

    const changeVal = (path, newVal, type) => {       
        const tmp = tplData(path)
        tmp[type] = newVal
        changePageDataDispatch(pageData)
    }

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
                                />
                                <LinkAddress linkVal={item["link_address"]} path={path} changeVal={changeVal} />
                            </Panel>
                        )
                    })
                }
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

export default React.memo(RowPanel);