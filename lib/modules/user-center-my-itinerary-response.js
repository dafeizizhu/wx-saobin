import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/user-info'

class UserCenterMyItineraryResponse extends Component {
  render() {
    return (
      <div>
        <div className='weui_cells_title'>XX接受了您的邀请！行程中人数已自动更新，您可前往行程单查询</div>
        <div style={styles.userCell}>
          <UserInfo />
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

export default connect(state => state)(UserCenterMyItineraryResponse)
