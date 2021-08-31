import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import imgSrc from '../../assets/img.jpg'
export default class Login extends Component {
    onFinish = (e) => {
        console.log(e);
        alert('登录')
    }
    render() {
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={imgSrc} alt="" className='imgStyle' />
                    <span className='title'>酆都城入境管理系統</span>
                </div>
                <div className='login-content'>
                    <p className='userLogin'>用戶登錄</p>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: '请输入密码！' },
                                { min: 6, message: '密码不得小于六位' }
                                   ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox><span className='login-form-forgot' > 記住我</span> </Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                忘記密碼
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登錄
                            </Button>
                                Or <a href="" className='login-form-forgot'>去註冊</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
