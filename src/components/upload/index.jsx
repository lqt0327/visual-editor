import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function upload(props) {
    const { imgWidth = 750, imgHeight = 280 } = props

    const onPreview = async file => {
        // let src = file.url;
        console.log(file,'xxxxxxxx')
        // if (!src) {
        //     src = await new Promise(resolve => {
        //         const reader = new FileReader();
        //         reader.readAsDataURL(file.originFileObj);
        //         reader.onload = () => resolve(reader.result);
        //     });
        // }
        // const image = new Image();
        // image.src = src;
        // const imgWindow = window.open(src);
        // imgWindow.document.write(image.outerHTML);
    };

    return (
        <div style={{ margin: "8px 0" }}>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
                onPreview={onPreview}
            >
                <Button icon={<UploadOutlined />}>选择图片</Button>
                &nbsp;（建议尺寸：{imgWidth}*{imgHeight}）
            </Upload>
        </div>
    )
}

export default upload