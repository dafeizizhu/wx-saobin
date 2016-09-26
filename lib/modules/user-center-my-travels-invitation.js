import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserInfo from '../components/user-info'
import TravelInfo from '../components/travel-info'

class UserCenterMyItineraryInvitation extends Component {
  render() {
    const { nick_name, status } = this.props.app.routes.userCenterMyTravelsInvitation
    const msg = status == '1'
      ? nick_name + '接受了您的请求！行程中人数已自动更新，您可前往行程单查询'
      : nick_name + '拒绝了您的请求。'
    return (
      <DocumentTitle title='用户中心 - 我的行程 - 邀请回应'>
        <div>
          <div className='weui_cells_title'>{ msg }</div>
          <UserInfo keys={['nick_name']} info={this.props.app.routes.userCenterMyTravelsInvitation} />
          <div className='weui_cells_title'>行程信息：</div>
          <TravelInfo {...this.props.app.routes.userCenterMyTravelsInvitation} />
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(UserCenterMyItineraryInvitation)
