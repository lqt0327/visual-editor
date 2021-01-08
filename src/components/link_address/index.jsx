import './index.sass'
import { Select, Input } from 'antd'

const { Option } = Select

function linkAddress() {
    return (
        <div className="link-address-container">
            <div className="ui-form-item item-url-input">
                <h3>链接</h3>
                <div className="ui-content">
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={()=>console.log('test')}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <div className="item-type-url">
                        <Input placeholder="Basic usage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default linkAddress;