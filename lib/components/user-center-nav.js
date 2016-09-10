import React, { Component } from 'react'
import { Link } from 'react-router'

const linkItems = {
  'personal-info': ['个人信息', '/user-center/personal-info'],
  'user-center-my-travels': ['我的行程', '/user-center/my-travels'],
  'user-center-need-cars': ['蹭车信息', '/user-center/need-cars'],
  'user-center-my-rate': ['我的评价', '/user-center/my-rate'],
  'travel': ['我有车', '/travel'],
  'need-a-car': ['我要蹭', '/need-a-car']
}

class UserCenterNav extends Component {
  render() {
    const keys = Object.keys(linkItems)
    const links = keys.map(key => {
      return <div key={key}><Link to={linkItems[key][1]} style={styles.link} activeStyle={styles.activeLink}>{linkItems[key][0]}</Link></div>
    })
    return (
      <div className='weui_cells' style={styles.container}>{ links }</div>
    )
  }
}

const styles = {
  container: {
    padding: '5px',
    flex: 'none'
  },
  activeLink: {
    fontWeight: 'bold'
  },
  link: {
    fontSize: '14px',
    lineHeight: '28px',
    color: '#666'
  }
}

export default UserCenterNav
