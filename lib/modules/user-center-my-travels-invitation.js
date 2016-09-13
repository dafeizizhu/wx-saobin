import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserInfo from '../components/user-info'

class UserCenterMyItineraryInvitation extends Component {
  render() {
    return (
      <DocumentTitle title='用户中心 - 我的行程 - 邀请回应'>
        <div>
          <div className='weui_cells_title'>XX接受了您的邀请！行程中人数已自动更新，您可前往行程单查询</div>
          <div style={styles.userCell}>
            <UserInfo keys={['nick_name']}/>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  userCell: {
    margin: '10px 15px',
  }
}

export default connect(state => state)(UserCenterMyItineraryInvitation)
