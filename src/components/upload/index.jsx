import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { validRatio } from 'src/utils/tools'
import axios from 'axios'

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

    const beforeUpload = (file, filelist) => {
        // 验证图片的函数validRatio  存在问题-------------
        const vaildRes = validRatio(file, {width: imgWidth,height: imgHeight})
        if(vaildRes === 'sucess') {
            console.log(file,'?????',filelist)
            let param = new FormData()
            // ‘file' 对应于服务端的 ctx.request.files.file 的 .file
            param.append('file', file)
            const config = {
                // headers: { 'Content-Type': 'multipart/form-data' }
            }
            axios.post('https://two.luoqintai.cn/upload', 
                param,
                config
            ).then(res => {
                console.log(res,'pppppppp')
            })
        }else {
            message.info(vaildRes)
            return false
        }
    }

    return (
        <div style={{ margin: "8px 0" }}>
            <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={beforeUpload}
                onPreview={onPreview}
            >
                <Button icon={<UploadOutlined />}>选择图片</Button>
                &nbsp;（建议尺寸：{imgWidth}*{imgHeight}）
            </Upload>
        </div>
    )
}

export default upload