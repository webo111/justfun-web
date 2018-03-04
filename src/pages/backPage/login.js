import React from 'react'
import { Form, Input, Button, notification} from 'antd'
import { hashHistory } from 'react-router'

import '../../less/login.less'

const FormItem = Form.Item;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            let n = values.username;
            let p = values.password;
            if (n === 'react' && p === 'react') {
                // 表单的路由处理    
                document.cookie = "nowKey=" + "home";
                hashHistory.push('/');
            } else {
                this.openNotificationWithIcon('info');
            }
          }
        });
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon(type) {
        return notification[type]({
            message: '用户名&密码',
            description: '都是：react',
            duration: 6
        })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');  
    }

    render() {  
        const { getFieldDecorator } = this.props.form;      
        return (
            <div id="loginpagewrap">
                <div id="loginWrap">
                    <div id="loginHeader">用户登录</div>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input type="password" placeholder="Password" />
                            )}
                        </FormItem>                                           
                        <Button type="primary" htmlType="submit" id="loginBtn">登录</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(
    LoginPage
);
export default Login;

