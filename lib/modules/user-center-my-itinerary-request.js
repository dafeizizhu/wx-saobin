import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCenterMyItineraryRequest extends Component {
  render() {
    return (
      <div>
        <div style={styles.userCell}>
          <img style={styles.userCellAvatar} src='http://pic.downcc.com/upload/2015-5/201558135111.png' />
          <div>昵称：</div>
          <div><label>性别：</label></div>
          <div><label>学校：</label></div>
          <div><label>乘车人数：</label></div>
          <div><label>联系方式：</label></div>
          <div className='weui_btn_area'>
            <button style={styles.userCellButton} className='weui_btn weui_btn_primary'>接</button>
            <button style={styles.userCellButton} className='weui_btn weui_btn_default'>不接</button>
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

export default connect(state => state)(UserCenterMyItineraryRequest)
