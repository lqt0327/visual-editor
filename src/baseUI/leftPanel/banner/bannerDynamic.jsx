import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Upload, LinkAddress } from "components";

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

function BannerDynamic() {
    return (
        <div className="schema-editor-container">
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                    <Upload 
                        imgWidth={750}
                        imgHeight={280}
                    />
                    <LinkAddress />
                </Panel>
                <Panel header="This is panel header 2" key="2" extra={genExtra()}>
                    <Upload 
                        imgWidth={750}
                        imgHeight={280}
                    />
                    <LinkAddress />
                </Panel>
                <Panel header="This is panel header 3" key="3" extra={genExtra()}>
                    <Upload 
                        imgWidth={750}
                        imgHeight={280}
                    />
                    <LinkAddress />
                </Panel>
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

export default BannerDynamic;