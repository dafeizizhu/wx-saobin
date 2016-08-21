import React, { Component } from 'react'
import { connect } from 'react-redux'

import { myConfirm } from '../utils/dialog.js'

class NeedACarSubmitRs extends Component {
  handlePickButtonClick(driver) {
    myConfirm('确定向该车主发送蹭车请求？', () => {
      console.log('OK')
    }, () => {
      console.log('Cancel')
    })
  }
  render() {
    const driverCells = [1, 2].map(driver => (
      <div key={driver} style={styles.cell}>
        <img style={styles.cellAvatar} src='http://pic.downcc.com/upload/2015-5/201558135111.png' />
        <div>昵称 学校</div>
        <div><label>乘车时间：</label></div>
        <div><label>目的地：</label></div>
        <div><label>出发地：</label></div>
        <div><label>乘车人数：</label></div>
        <div><label>评分：</label></div>
        <div><label>备注：</label></div>
        <button style={styles.cellButton} className='weui_btn weui_btn_primary' onClick={this.handlePickButtonClick.bind(this, driver)}>我要蹭</button>
      </div>
    ))
    return (
      <div>
        <div className='weui_cells_title'>为您匹配的行程：</div>
        <div className='weui_cells'>
          <div style={styles.cells}>{ driverCells }</div>
        </div>
      </div>
    )
  }
}

const styles = {
  cells: {
    display: 'flex',
    overflowX: 'auto',
    fontSize: '14px'
  },
  cell: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    marginRight: '10px',
    flex: 'none'
  },
  cellAvatar: {
    width: '50%',
    alignSelf: 'center',
    borderRadius: '50%'
  },
  cellButton: {
    width: '50%'
  }
}

export default connect(state => state)(NeedACarSubmitRs)
