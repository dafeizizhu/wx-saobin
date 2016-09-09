import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserCenterNav from '../components/user-center-nav'
import PersonalInfo from '../components/personal-info'

class UserCenterPersonalInfo extends Component {
  render() {
    return (
      <DocumentTitle title='用户中心 - 个人信息'>
        <div style={styles.container} className='narrow'>
          <UserCenterNav />
          <form style={{ flex: 1 }}>
            <PersonalInfo />
            <div className='weui_btn_area'>
              <input type='submit' value='确认修改' className='weui_btn weui_btn_primary' />
            </div>
          </form>
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterPersonalInfo)
