import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/user-info'

class UserCenterMyItineraryRequest extends Component {
  render() {
    return (
      <div>
        <div style={styles.userCell}>
          <UserInfo />
          <div className='weui_btn_area'>
            <button className='weui_btn weui_btn_primary'>接</button>
            <button className='weui_btn weui_btn_default'>不接</button>
          </div>
        </div>
        <div className='weui_cells_title'>
          <p>温馨提示：为他人着想，请务必在收到提醒后24个小时内选择哦</p>
          <p>剩余时间：</p>
        </div>
      </div>
    )
  }
}

const styles = {
  userCell: {
    margin: '10px 15px',
  }
}

export default connect(state => state)(UserCenterMyItineraryRequest)
