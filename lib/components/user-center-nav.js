import React, { Component } from 'react'

class UserCenterNav extends Component {
  render() {
    return (
      <div className='weui_cells' style={styles.container}>
        <div><a>个人信息</a></div>
        <div><a>我的行程</a></div>
        <div><a>蹭车信息</a></div>
        <div><a>我的评价</a></div>
        <div><a>我有车</a></div>
        <div><a>我要蹭</a></div>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: '10px',
    paddingRight: '20px',
    flex: 'none'
  }
}

export default UserCenterNav
