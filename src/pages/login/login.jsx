/*
后台管理主路由组件
*/ 
import React, { Component } from 'react'
import './login.less'

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="login-header">
                    <h1>React项目：后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登陆</h1>
                    <div>Form组件界面</div>
                </div>
            </div>
        )
    }
}
