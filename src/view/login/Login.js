import React, {Component} from "react";
import {Button,Form,Input,Icon,Checkbox} from "antd";
import "../../css/login/login.css"

class  Login extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="wrap">
                <div className="form-wrap">
                    <Form onSubmit={this.handleSubmit} className="form-content">
                        <Form.Item>
                            {getFieldDecorator("username",{
                                rules: [{required: true, message: '请输入正确的用户名!' }]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{fontSize:"18px",color: "rgb(24,144,255)"}}/>}
                                    placeholder="用户名"
                                    size="large"
                                ></Input>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("password",{
                                rules: [{required: true, message: '请输入正确的密码!' }]
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize:"18px",color: "rgb(24,144,255)"}}/>}
                                    type="password"
                                    placeholder="密码"
                                    size="large"
                                    style={{backgroundColor:" transparent"}}
                                ></Input>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login)

export default WrappedNormalLoginForm;
