import React, { Component } from 'react'

import { Cell } from './style/weui'

class UserInfo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div className='weui_cells'>
          <Cell label='头像'><img style={styles.avatar} src='https://team.weui.io/avatar/bear.jpg' /></Cell>
          <Cell label='昵称'>昵称</Cell>
          <Cell label='性别'>男</Cell>
          <Cell label='乘车时间'>2016年09月01日</Cell>
          <Cell label='目的地'>深圳骚斌的家</Cell>
          <Cell label='出发地'>深圳骚斌的家</Cell>
          <Cell label='乘车人数'>4</Cell>
          <Cell label='可载人数'>4</Cell>
          <Cell label='车型'>宝马</Cell>
          <Cell label='评分'>4</Cell>
          <Cell label='备注'>备注</Cell>
          <Cell label='联系方式'>13888888888</Cell>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%'
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '4px',
    verticalAlign: 'middle'
  }
}

export default UserInfo
