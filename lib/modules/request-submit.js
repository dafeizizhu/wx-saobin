import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import { myConfirm, myAlert } from '../utils/dialog.js'
import UserInfo from '../components/user-info'
import { fetchPostRequest } from '../actions/routes/request-submit'

class RequestSubmit extends Component {
  handlePickClick(item) {
    const { dispatch } = this.props
    const { user_id } = this.props.app.state.user
    const { passenger_num } = this.props.app.routes.request
    myConfirm('确定向该车主发送蹭车请求？', () => {
      dispatch(fetchPostRequest(user_id, passenger_num, item))
    })
  }
  handleShareClick() {
    console.log('share')
  }
  render() {
    const { type, travel_list } = this.props.app.routes.requestSubmit
    let content
    switch(type) {
      case 'search':
        const travelCells = travel_list.map((item, index) => {
          return (
            <div key={item.travel_id || index}>
              <UserInfo 
                keys={['nick_name', 'school', 'departure_time', 'departure_addr', 'destination_addr', 'passenger_num', 'vehicle_model', 'star', 'remark']}
                info={item} />
              <div className='weui_btn_area'>
                <button className='weui_btn weui_btn_primary' onClick={this.handlePickClick.bind(this, item)}>我要蹭</button>
              </div>
            </div>
          )
        })
        content = (
          <div>
            <div className='weui_cells_title'>为您匹配的行程：</div>
            { travelCells }
          </div>
        )
        break
      case 'publish':
        content = (
          <div>
            <div className='weui_cells_title'>蹭车需求已发布！您可载用户中心－蹭车信息中查看或修改行程。若车主愿意接车，您将收到微信推送，敬请留意。</div>
            <div className='weui_cells_title'>分享需求至朋友圈，让更多朋友来接您？</div>
            <div className='weui_btn_area'>
              <button className='weui_btn weui_btn_primary' onClick={this.handleShareClick.bind(this)}>分享</button>
            </div>
          </div>
        )
        break
    }
    return (
      <DocumentTitle title='我要蹭'>{ content }</DocumentTitle>
    )
  }
}

export default connect(state => state)(RequestSubmit)
