import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/user-info'

class UserCenterNeedCarsRequest extends Component {
  render() {
    return (
      <div>
        <div className='weui_cells_title'>XX邀请您加入他的行程：</div>
        <div style={{margin: '10px 15px'}}>
          <UserInfo />
        </div>
        <div className='weui_cells_title'>行程信息：</div>
        <div style={{margin: '10px 15px'}}>
          <button style={{marginTop: '15px'}} className='weui_btn weui_btn_primary'>蹭</button>
          <button className='weui_btn weui_btn_default'>不蹭</button>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(UserCenterNeedCarsRequest)
