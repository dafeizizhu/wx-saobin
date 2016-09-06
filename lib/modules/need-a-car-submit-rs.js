import React, { Component } from 'react'
import { connect } from 'react-redux'

import { myConfirm, myAlert } from '../utils/dialog.js'
import UserInfo from '../components/user-info'

class NeedACarSubmitRs extends Component {
  handlePickButtonClick(driver) {
    myConfirm('确定向该车主发送蹭车请求？', () => {
      myAlert('已向车主发送蹭车请求！车主将收到您的联系方式并联系您。', () => {
        console.log('Ok')
      })
    }, () => {
      console.log('Cancel')
    })
  }
  render() {
    const driverCells = [1, 2].map(driver => (
      <div key={driver} style={styles.cell}>
        <UserInfo keys={['avatar', 'nick_name', 'departure_time', 'destination', 'departure', 'passenger_num', 'vehicle_model', 'star', 'remark']} />
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
  cellButton: {
    marginTop: '15px',
    width: '50%'
  }
}

export default connect(state => state)(NeedACarSubmitRs)
