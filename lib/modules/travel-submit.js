import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'
import { hashHistory } from 'react-router'

import { myConfirm } from '../utils/dialog.js'
import UserInfo from '../components/user-info'

class TravelSubmit extends Component {
  handlePickButtonClick(item) {
    myConfirm('确定向该乘客发送我的行程？', () => {
      console.log('send', item)
    })
  }
  handleMoreClick(evt) {
    hashHistory.push('/travel')
  }
  handleShareClick(evt) {
    console.log('share')
  }
  render() {
    const { type, request_list, message } = this.props.app.routes.travelSubmit
    const userCells = request_list.map((item, index) => (
      <div key={item.request_id || index} style={styles.userCell}>
        <UserInfo keys={['nick_name', 'departure_time', 'passenger_num']} info={item} />
        <button style={styles.userCellButton} className='weui_btn weui_btn_primary' onClick={this.handlePickButtonClick.bind(this, item)}>我来接</button>
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
          <div className='weui_cells'>
            <div style={styles.userCells}>{ userCells }</div>
          </div>
          <div className='weui_btn_area'>
            <button className='weui_btn weui_btn_primary' onClick={this.handleMoreClick.bind(this)}>再发布一条</button>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  userCells: {
    display: 'flex',
    overflowX: 'auto',
    fontSize: '14px'
  },
  userCell: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    marginRight: '10px',
    flex: 'none'
  },
  userCellButton: {
    marginTop: '15px',
    width: '50%'
  }
}

export default connect(state => state)(TravelSubmit)
