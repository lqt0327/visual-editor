import React from 'react'
import { loginRequest } from 'src/api/request'
import { connect } from 'react-redux'
import { setUid } from 'store/actions'
import './style.sass'
import { Form, Input, Button, Checkbox, message } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Login(props) {

    const { 
        setUidDispatch
    } = props

    const onFinish = (values) => {
        console.log('Success:', values);
        loginRequest(values).then((res)=>{
            if(res.statusCode === 200) {
                message.info(res.message)
            }else {
                // message.success(res)
                setUidDispatch(res.id)
                localStorage.setItem('uid',res.id)
                localStorage.setItem('token',res.token)
                props.history.push('/home')
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <div className="login-content">
                <div className="login-content-left">
                    <div className="login-content-left__desc">
                        <h3>可视化页面搭建</h3>
                        <p>无需搭建开发环境和部署服务器，基于开发者工具，使用丰富的 UI 组件和行业模板研发 H5。</p>
                    </div>
                </div>
                <div className="login-content-right">
                    <h2>账号密码登录</h2>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '用户名不能为空!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '密码不能为空!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>&nbsp;&nbsp;
                            <Button type="primary" onClick={()=>{
                                props.history.push('/register')
                            }}>
                                注册
                            </Button><br />
                            
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <a href="https://www.baidu.com">忘记密码</a>
                        </Form.Item>
                    </Form>
                </div>
                
            </div>
            
        </div>
    );
}

// 映射Redux全局的state到组件到props上

const mapStateToProps = (state) => ({
    uid: state.getIn(['panels', 'comp_i'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        setUidDispatch(data) {
            dispatch(setUid(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)