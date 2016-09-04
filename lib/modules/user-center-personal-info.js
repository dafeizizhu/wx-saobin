import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserCenterNav from '../components/user-center-nav'
import PersonalInfo from '../components/personal-info'

class UserCenterPersonalInfo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <UserCenterNav />
        <form>
          <PersonalInfo />
          <div className='weui_btn_area'>
            <input type='submit' value='确认修改' className='weui_btn weui_btn_primary' />
          </div>
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterPersonalInfo)