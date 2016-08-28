import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCenterMyItineraryResponse extends Component {
  render() {
    return (
      <div>
        <div className='weui_cells_title'>XX接受了您的邀请！行程中人数已自动更新，您可前往行程单查询</div>
        <div style={styles.userCell}>
          <img style={styles.userCellAvatar} src='http://pic.downcc.com/upload/2015-5/201558135111.png' />
          <div><label>性别：</label></div>
          <div><label>学校：</label></div>
          <div><label>乘车人数：</label></div>
          <div><label>联系方式：</label></div>
        </div>
      </div>
    )
  }
}

const styles = {
  userCell: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    margin: '10px 15px',
    flex: 'none',
    fontSize: '14px',
    border: '1px solid #ccc'
  },
  userCellAvatar: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: '50%'
  },
  userCellButton: {
    width: '50%'
  }
}

export default connect(state => state)(UserCenterMyItineraryResponse)
