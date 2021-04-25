import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import { validRatio } from 'src/utils/tools'
import axios from 'axios'

/**
 * @description 上传图片到服务端并返回该图片对应的url地址
 * @param {any} file -上传图片的信息
 */
const uploadImg = (file) => {
    let param = new FormData()
    // ‘file' 对应于服务端的 ctx.request.files.file 的 .file
    param.append('file', file)
    const config = {
        // headers: { 'Content-Type': 'multipart/form-data' }
    }
    const url = axios.post('https://two.luoqintai.cn/upload',
        param,
        config
    ).then(res => {
        message.info('上传成功')
        return res.data.url
    })
    return url
}

/**
 * @description 上传图片 格式验证函数
 * @param {any} file -上传图片的信息
 * @param {object} param1 -期望的 图片格式
 */
const validRatio = (file, { width, height, size = 1000000 }) => {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = e.target.result;
            const image = new Image();
            image.onload = function () {
                if (
                    image.width !== width ||
                    image.height !== height
                ) {
                    reject(`图片宽度应为${width}，高度应为${height}`)
                }
                if (file.size > size) {
                    reject(`图片大小不能超过${size / 1000000}MB`)
                }
                resolve(file)
            }
            image.src = data
        }
        reader.readAsDataURL(file)
    })
    
}

function upload(props) {
    const { 
        imgWidth = 750, 
        imgHeight = 280,
        changeVal
    } = props

    const onPreview = async file => {
        // let src = file.url;
        console.log(file, 'xxxxxxxx')
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

    const beforeUpload = (file) => {
        return validRatio(file, { width: imgWidth, height: imgHeight }).then(async (res)=>{
            const url = await uploadImg(res)
            changeVal(url,"img_address")
        }).catch((err)=>{
            message.info(err)
            return Upload.LIST_IGNORE
        })
    }

    return (
        <div style={{ margin: "8px 0" }}>
            <Upload
                listType="text"
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