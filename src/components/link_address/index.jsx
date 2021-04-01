import React, { useState } from 'react'
import './index.sass'
import { Select, Input } from 'antd'

const { Option } = Select

const LinkAddress = React.forwardRef((props,ref) => {
    const [val,setVal] = useState()
    console.log(ref,'link_address')
    return (
        <div className="link-address-container">
            <div className="ui-form-item item-url-input">
                <h3>链接</h3>
                <div className="ui-content">
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={()=>console.log('test')}>
                        <Option value="jack" disabled>本地链接</Option>
                        <Option value="lucy">外部链接</Option>
                    </Select>
                    <div className="item-type-url" ref={ref} >
                        <Input placeholder="Basic usage" defaultValue="1231231"
                        onChange={(e)=>setVal(e.target.value)} 
                        
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

export default LinkAddress;