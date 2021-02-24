import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function upload(props) {
    const { imgWidth=750, imgHeight=280 } = props
    return (
        <div style={{margin:"8px 0"}}>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
            >
                <Button icon={<UploadOutlined />}>选择图片</Button>
                &nbsp;（建议尺寸：{imgWidth}*{imgHeight}）
            </Upload>
        </div>
    )
}

export default upload