import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserInfo from '../components/user-info'
import TravelInfo from '../components/travel-info'

class UserCenterMyRequestsRequest extends Component {
  render() {
    const { nick_name, status } = this.props.app.routes.userCenterMyRequestsRequest
    const msg = status == '1' 
      ? nick_name + '接受了您的请求！行程已添加至“用户中心－我的行程“，您可随时前往查看。'
      : nick_name + '无情地拒绝了您的请求。'
    return (
      <DocumentTitle title='用户中心 - 蹭车信息 - 蹭车回应'>
        <div>
          <div className='weui_cells_title'>{ msg }</div>
          <UserInfo keys={['nick_name']} info={this.props.app.routes.userCenterMyRequestsRequest} />
          <div className='weui_cells_title'>行程信息：</div>
          <TravelInfo {...this.props.app.routes.userCenterMyRequestsRequest} />
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(UserCenterMyRequestsRequest)
