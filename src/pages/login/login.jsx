/*
后台管理主路由组件
*/
import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';


import './login.less'


const Item = Form.Item

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        // 取出输入的相关数据
        // const form = this.props.form
        // const values = form.validateFields()
        // const username = form.getFieldsValue('username')
        // const password = form.getFieldsValue('password')
        // console.log(values, username, password)


        //对表单所有字段进行统一验证
        this.props.form.validateFields((err,values) => {
            if(!err) {
                console.log('请输入',values);
            }
        })

        alert("发送ajax数据")
    };

    /*对密码进行自定义验证*/ 
    validatePwd = (rule, value, callback) => {
        // 1). 必须输入
        // 2). 必须大于等于4位
        // 3). 必须小于等于12位
        // 4). 必须是英文、数字或下划线组成
        value = value.trim()
        if (!value) {
            callback('密码必须输入')

        } else if (value.length < 4) {
            callback('密码不能小于4位')
        } else if (value.length > 12) {
            callback('密码不能大于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数学或下划线组成')
        } 
         else {
            callback() //验证通过
        }
    }

    render() {

        const { getFieldDecorator } = this.props.form
        return (
            <div className='login'>
                <div className="login-header">
                    <h1>React项目：后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登陆</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('username', { //配置对象：属性名是一些特定的名称
                                rules: [
                                    { required: true, whitespace: true, message: '请输入您的用户名' },
                                    { min: 4, message: '用户名不能少于4位' },
                                    { max: 12, message: '用户名不能大于12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, whitespace: true, message: '请输入正确的密码' },
                                    { min: 6, message: '密码不能少于5位' },
                                    { max: 12, message: '密码不能大于12位' },
                                    { validator: this.validatePwd }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            )}
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
          </Button>
                        </Item>
                    </Form>
                </div>
            </div>
        )
    }
}

/**
 * 理解Form组件：包含<Form>的组件
 * 利用Form.create()包装Form组件生成一个新的组件
 * 新组建会向form组件传递一个强大的属性：属性名：form，属性值对象
 *
 *
 * 高阶函数
 *  定义：接收的参数是函数或者返回值是函数
 *  常见的：数组遍历相关的方法 /定时器/ Promise
 *  作用：实现一个更加强大，动态的功能
 *
 * 高阶组件：
 *  本质是一个函数
 *  函数接收一个组件，返回一个新的组件
 *  Form.create()返回的就是一个高阶组件
 */

const WrapperFrom = Form.create({})(LoginForm)
export default WrapperFrom  //<From(LoginForm)>

/*
用户名/密码的的合法性要求
  1). 必须输入
  2). 必须大于等于4位
  3). 必须小于等于12位
  4). 必须是英文、数字或下划线组成
*/


/*
组件：组件类，本质就是一个构造函数,定义组件：class组件/function组件
组件对象：组件类的实例 ，也就是构造函数的实例 <MyComp></MyComp>
*/