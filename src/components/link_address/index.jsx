import React from 'react'
import './index.sass'
import { Select, Input } from 'antd'
import _ from 'lodash'

const { Option } = Select

const LinkAddress = (props) => {
    const { changeVal, linkVal } = props
    return (
        <div className="link-address-container">
            <div className="ui-form-item item-url-input">
                <h3>链接</h3>
                <div className="ui-content">
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={()=>console.log('test')}>
                        <Option value="jack" disabled>本地链接</Option>
                        <Option value="lucy">外部链接</Option>
                    </Select>
                    <div className="item-type-url" >
                        <Input placeholder="Basic usage" defaultValue={linkVal}
                        onChange={_.debounce((e)=>changeVal(e.target.value,"link_address"),250)} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LinkAddress);