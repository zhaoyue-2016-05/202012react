/*
应用根组件
*/ 

import React, { Component } from 'react'
import {Button , message } from 'antd'
import {BrowserRouter , HashRouter,Switch,Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component {

  handleClick = () => {
    message.success('成功啦。。。')
  }
  
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
