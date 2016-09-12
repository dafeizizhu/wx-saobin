import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserInfo from '../components/user-info'
import { myAlert } from '../utils/dialog'

class UserCenterMyItineraryRequest extends Component {
  handlePick() {
    myAlert('已确定接该乘客，请通过乘客的联系方式沟通联系Ta。', () => {
      console.log('ok')
    })
  }
  handleNoPick() {
    myAlert('已拒绝该乘客的请求！', () => {
      console.log('ok')
    })
  }
  render() {
    return (
      <DocumentTitle title='用户中心 - 我的行程 - 蹭车请求'>
        <div>
          <div className='weui_cells_title'>XX想在行程一中蹭你车！</div>
          <div style={styles.userCell}>
            <UserInfo keys={['nick_name']}/>
            <div className='weui_btn_area'>
              <button className='weui_btn weui_btn_primary' onClick={this.handlePick.bind(this)}>接</button>
              <button className='weui_btn weui_btn_default' onClick={this.handleNoPick.bind(this)}>不接</button>
            </div>
          </div>
          <div className='weui_cells_title'>
            <p>温馨提示：为他人着想，请务必在收到提醒后24个小时内选择哦</p>
          </div>
          <div className='weui_cells'>
            <div className='weui_cell'>
              <div className='weui_cell_primary'>剩余时间</div>
              <div className='weui_cell_ft'>10秒</div>
            </div>
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

export default connect(state => state)(UserCenterMyItineraryRequest)
