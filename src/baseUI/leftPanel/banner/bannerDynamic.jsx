import { Collapse } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

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

function BannerDynamic(props) {
    const {list} = props
    return (
        <div className="schema-editor-container">
            <Collapse accordion>
                <Panel header="This is panel header 1" key="1" extra={genExtra()}>
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i}>{item()}</div>
                            )
                        })
                    }
                </Panel>
                <Panel header="This is panel header 2" key="2" extra={genExtra()}>
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i}>{item()}</div>
                            )
                        })
                    }
                </Panel>
                <Panel header="This is panel header 3" key="3" extra={genExtra()}>
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i}>{item()}</div>
                            )
                        })
                    }
                </Panel>
            </Collapse>
            <a className="schema-editor-container__add"><i className="icon iconfont">&#xe8a1;</i> 新增列表项</a>
        </div>
    )
}

export default BannerDynamic;