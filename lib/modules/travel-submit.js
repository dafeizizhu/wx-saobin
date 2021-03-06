import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'
import { hashHistory } from 'react-router'

import { myConfirm } from '../utils/dialog.js'
import UserInfo from '../components/user-info'
import { fetchPostInvitation } from '../actions/routes/travel-submit'
import Loading from '../components/loading'

class TravelSubmit extends Component {
  handlePickButtonClick(item) {
    const { dispatch } = this.props
    const { user_id } = this.props.app.state.user
    const { travel_id } = this.props.app.routes.travelSubmit
    myConfirm('确定向该乘客发送我的行程？', () => {
      dispatch(fetchPostInvitation(user_id, travel_id, item))
    })
  }
  handleMoreClick(evt) {
    hashHistory.push('/travel')
  }
  handleShareClick(evt) {
    console.log('share')
  }
  render() {
    const { type, request_list, message, loading_post_invitation } = this.props.app.routes.travelSubmit
    const userCells = request_list.map((item, index) => (
      <div key={item.request_id || index}>
        <UserInfo keys={['nick_name', 'departure_time', 'passenger_num']} info={item} />
        <div className='weui_btn_area'>
          <button className='weui_btn weui_btn_primary' onClick={this.handlePickButtonClick.bind(this, item)}>我来接</button>
        </div>
      </div>
    ))
    const share = type == 'publish' ? [
      <div key='message' className='weui_cells_title'>{ message }</div>,
      <div key='title' className='weui_cells_title'>您可在用户中心－我的行程中查看或修改行程。若有乘客愿意蹭您车，您将收到微信推送，敬请留意。分享行程至朋友圈，让更多朋友来加入？</div>,
      <div key='btn_area' className='weui_btn_area'>
        <button className='weui_btn weui_btn_primary' onClick={this.handleShareClick.bind(this)}>分享</button>
      </div>
    ]: ''

    return (
      <DocumentTitle title='我有车'>
        <div>
          { share }
          <div className='weui_cells_title'>为您匹配的乘客：</div>
          { userCells }
          <div className='weui_btn_area'>
            <button className='weui_btn weui_btn_primary' onClick={this.handleMoreClick.bind(this)}>再发布一条</button>
          </div>
          <Loading visibility={ loading_post_invitation } />
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(TravelSubmit)
