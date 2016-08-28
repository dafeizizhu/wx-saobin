import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserInfo from '../components/user-info'
import ItineraryInfo from '../components/itinerary-info'
import { myAlert } from '../utils/dialog'

class UserCenterNeedCarsRequest extends Component {
  handleNeed() {
    myAlert('已确定蹭车，请通过车主的联系方式沟通联系Ta。', () => {
      console.log('ok')
    })
  }
  handleNoNeed() {
    myAlert('已拒绝该车主的邀请。', () => {
      console.log('ok')
    })
  }
  render() {
    return (
      <div>
        <div className='weui_cells_title'>XX邀请您加入他的行程：</div>
        <UserInfo />
        <div className='weui_cells_title'>行程信息：</div>
        <ItineraryInfo />
        <div style={{margin: '10px 15px'}}>
          <button style={{marginTop: '15px'}} className='weui_btn weui_btn_primary' onClick={this.handleNeed.bind(this)}>蹭</button>
          <button className='weui_btn weui_btn_default' onClick={this.handleNoNeed.bind(this)}>不蹭</button>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(UserCenterNeedCarsRequest)