import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserInfo from '../components/user-info'
import TravelInfo from '../components/travel-info'

class UserCenterNeedCarsResponse extends Component {
  render() {
    return (
      <DocumentTitle title='用户中心 - 蹭车信息 - 蹭车回应'>
        <div>
          <div className='weui_cells_title'>XX接受了您的请求！行程已添加至“用户中心－我的行程“，您可随时前往查看。</div>
          <UserInfo />
          <div className='weui_cells_title'>行程信息：</div>
          <TravelInfo />
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(UserCenterNeedCarsResponse)
