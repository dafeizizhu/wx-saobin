import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import { myConfirm, myAlert } from '../utils/dialog.js'
import UserInfo from '../components/user-info'

class RequestSubmit extends Component {
  handlePickClick(item) {
    myConfirm('确定向该车主发送蹭车请求？', () => {
      myAlert('已向车主发送蹭车请求！车主将收到您的联系方式并联系您。', () => {
        console.log('Ok')
      })
    }, () => {
      console.log('Cancel')
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
            <div key={item.id || index} style={styles.cell}>
              <UserInfo 
                keys={['nick_name', 'school', 'departure_time', 'departure_name', 'destination_name', 'passenger_num', 'vehicle_model', 'star', 'remark']}
                info={item} />
              <button style={styles.cellButton} className='weui_btn weui_btn_primary' onClick={this.handlePickClick.bind(this, item)}>我要蹭</button>
            </div>
          )
        })
        content = (
          <div>
            <div className='weui_cells_title'>为您匹配的行程：</div>
            <div className='weui_cells'>
              <div style={styles.cells}>{ travelCells }</div>
            </div>
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

export default connect(state => state)(RequestSubmit)
