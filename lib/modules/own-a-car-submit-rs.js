import React, { Component } from 'react'
import { connect } from 'react-redux'

import { myConfirm } from '../utils/dialog.js'

class OwnACarSubmitRs extends Component {
  handlePickButtonClick(user) {
    myConfirm('确定向该乘客发送我的行程？', () => {
      console.log('OK')
    }, () => {
      console.log('Cancel')
    })
  }
  render() {
    const userCells = [1, 2].map(user => (
      <div key={user} style={styles.userCell}>
        <img style={styles.userCellAvatar} src='http://pic.downcc.com/upload/2015-5/201558135111.png' />
        <div>昵称 学校</div>
        <div><label>乘车时间：</label></div>
        <div><label>目的地：</label></div>
        <div><label>出发地：</label></div>
        <div><label>乘车人数：</label></div>
        <div><label>评分：</label></div>
        <div><label>备注：</label></div>
        <button style={styles.userCellButton} className='weui_btn weui_btn_primary' onClick={this.handlePickButtonClick.bind(this, user)}>我来接</button>
      </div>
    ))
    return (
      <div>
        <div className='weui_cells_title'>行程1已发布！您可在用户中心－我的行程中查看或修改行程。若有乘客愿意蹭您车，您将收到微信推送，敬请留意。分享行程至朋友圈，让更多朋友来加入？</div>
        <div className='weui_btn_area'>
          <button className='weui_btn weui_btn_primary'>分享</button>
        </div>
        <div className='weui_cells_title'>为您匹配的乘客：</div>
        <div className='weui_cells'>
          <div style={styles.userCells}>{ userCells }</div>
        </div>
        <div className='weui_btn_area'>
          <button className='weui_btn weui_btn_primary'>再发布一条</button>
        </div>
      </div>
    )
  }
}

const styles = {
  userCells: {
    display: 'flex',
    overflowX: 'auto'
  },
  userCell: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    marginRight: '10px',
    flex: 'none'
  },
  userCellAvatar: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: '50%'
  },
  userCellButton: {
    width: '50%'
  }
}

export default connect(state => state)(OwnACarSubmitRs)
