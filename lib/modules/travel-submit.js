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
    const { request_list, message } = this.props.app.routes.travelSubmit
    const userCells = request_list.map(item => (
      <div key={item.id} style={styles.userCell}>
        <UserInfo keys={['avatar', 'nick_name', 'school', 'departure_time', 'departure_name', 'passenger_num', 'rate', 'remark']} info={item} />
        <button style={styles.userCellButton} className='weui_btn weui_btn_primary' onClick={this.handlePickButtonClick.bind(this, item)}>我来接</button>
      </div>
    ))
    return (
      <DocumentTitle title='我有车'>
        <div>
          <div className='weui_cells_title'>{ message }</div>
          <div className='weui_btn_area'>
            <button className='weui_btn weui_btn_primary' onClick={this.handleShareClick.bind(this)}>分享</button>
          </div>
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