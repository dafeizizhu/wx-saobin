import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserInfo from '../components/user-info'
import TravelInfo from '../components/travel-info'
import { myAlert } from '../utils/dialog'
import { fetchAnswerInvitation } from '../actions/routes/user-center-my-requests-invitation'

class UserCenterMyRequestsInvitation extends Component {
  handleNeed() {
    const { dispatch } = this.props
    const { invitation_id } = this.props.app.routes.userCenterMyRequestsInvitation
    const { user_id } = this.props.app.state.user
    dispatch(fetchAnswerInvitation(user_id, invitation_id, 1))
  }
  handleNoNeed() {
    const { dispatch } = this.props
    const { invitation_id } = this.props.app.routes.userCenterMyRequestsInvitation
    const { user_id } = this.props.app.state.user
    dispatch(fetchAnswerInvitation(user_id, invitation_id, 2))
  }
  render() {
    const { userCenterMyRequestsInvitation } = this.props.app.routes
    const { nick_name } = userCenterMyRequestsInvitation
    return (
      <DocumentTitle title='用户中心 - 蹭车信息 - 行程邀请'>
        <div>
          <div className='weui_cells_title'>{nick_name}邀请您加入他的行程：</div>
          <UserInfo keys={['nick_name']} info={userCenterMyRequestsInvitation} />
          <div className='weui_cells_title'>行程信息：</div>
          <TravelInfo {...userCenterMyRequestsInvitation} />
          <div style={{margin: '10px 15px'}}>
            <button style={{marginTop: '15px'}} className='weui_btn weui_btn_primary' onClick={this.handleNeed.bind(this)}>蹭</button>
            <button className='weui_btn weui_btn_default' onClick={this.handleNoNeed.bind(this)}>不蹭</button>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(UserCenterMyRequestsInvitation)
