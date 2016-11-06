import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import DocumentTitle  from 'react-document-title'

import UserCenterNav from '../components/user-center-nav'
import { Cell, InputCell, SelectCell } from '../components/style/weui'
import {
  changePassengerNum,
  changeDepartureTime,
  changeRemark,
  fetchDelMyRequest
} from '../actions/routes/user-center-my-requests'
import { begin } from '../actions/routes/user-center-my-requests-request'
import { beginInvitation } from '../actions/routes/user-center-my-requests-invitation'
import { STATUS_LABELS } from '../utils/constants'
import Loading from '../components/loading'

class UserCenterMyRequests extends Component {
  handleInvitationClick(item) {
    const { dispatch } = this.props
    dispatch(beginInvitation(item))
    hashHistory.push('/user-center/my-requests/invitation')
  }
  handleRequestForMeClick(item) {
    const { dispatch } = this.props
    dispatch(begin(item))
    hashHistory.push('/user-center/my-requests/request')
  }
  handleDepartureNameClick(item) {
    const { dispatch } = this.props
    locationPicker.show({}, (loc, name) => {
      dispatch(changeDeparture(loc, name))
    })
  }
  handleDestinationNameClick(item) {
    const { dispatch } = this.props
    locationPicker.show({}, (loc, name) => {
      dispatch(changeDestination(loc, name))
    })
  }
  handlePassengerNumChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changePassengerNum(Number(evt.target.value), item))
  }
  handleDepartureTimeChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeDepartureTime(evt.target.value, item))
  }
  handleRemarkChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeRemark(evt.target.value, item))
  }
  handleRequestCancelClick(item, evt) {
    evt.preventDefault()
    if (item.status == '3') return
    const { dispatch } = this.props
    const { user_id } = this.props.app.state.user
    dispatch(fetchDelMyRequest(user_id, item.request_id))
  }
  handleRequestSaveClick(item, evt) {
    evt.preventDefault()
    if (item.status == '3') return
  }
  render() {
    const { 
      my_request_list, invitation_for_me_list, my_request_res_list,
      loading_get_my_request_res, loading_get_invitation_for_me, loading_get_my_request, loading_del_my_request
    } = this.props.app.routes.userCenterMyRequests
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    const myRequestList = my_request_list.map((item, index) => {
      let saveButtonClassName = 'weui_btn weui_btn_primary'
      if (item.status == '3') saveButtonClassName += ' weui_btn_disabled'
      let cancelButtonClassName = 'weui_btn weui_btn_default'
      if (item.status == '3') cancelButtonClassName += ' weui_btn_disabled'
      return (
        <form key={item.request_id || index}>
          <div className='weui_cells_title'>行程{ index }</div>
          <div className='weui_cells weui_cells_access'>
            <Cell label='选择出发地点' onClick={this.handleDepartureNameClick.bind(this, item)}>{item.departure_name}</Cell>
            <Cell label='目的地' onClick={this.handleDestinationNameClick.bind(this, item)}>{item.destination_name}</Cell>
            <Cell label='状态'>{STATUS_LABELS[item.status]}</Cell>
            <SelectCell label='乘车人数'>
              <select className='weui_select' defaultValue={item.passenger_num} onChange={this.handlePassengerNumChange.bind(this, item)}>{ passengerNumOptions }</select>
            </SelectCell>
            <InputCell label='出发时间'>
              <input className='weui_input' type='datetime-local' defaultValue={item.departure_time} onChange={this.handleDepartureTimeChange.bind(this, item)} />
            </InputCell>
            <InputCell label='备注'>
              <input className='weui_input' defaultValue={item.remark} onChange={this.handleRemarkChange.bind(this, item)} />
            </InputCell>
          </div>
          <div className='weui_btn_area'>
            <input type='submit' value='保存修改' className={ saveButtonClassName } onClick={this.handleRequestSaveClick.bind(this, item)}/>
            <input type='submit' value='取消发布' className={ cancelButtonClassName } onClick={this.handleRequestCancelClick.bind(this, item)}/>
          </div>
        </form>
      )
    })
    const invitationForMeList = invitation_for_me_list.filter(item => item.status == '0').map((item, index) => (
      <div key={item.invitation_id || index} className='weui_cell' onClick={this.handleInvitationClick.bind(this, item)}>
        <i className='weui_icon_info'></i>车主{ item.nick_name }邀请您加入Ta的行程
      </div>
    ))
    const myRequestResList = my_request_res_list.map(item => (
      <div key={item.request_id} className='weui_cell' onClick={this.handleRequestForMeClick.bind(this, item)}>
        <i className='weui_icon_info'></i>车主{ item.nick_name }回应了您的蹭车请求
      </div>
    ))
    return (
      <DocumentTitle title='用户中心 - 蹭车信息'>
        <div>
          <div style={styles.container} className='narrow'>
            <UserCenterNav />
            <div style={{ flex: 1 }}>
              <div className='weui_cells'>
                {/* getInvitationForMe */}
                { invitationForMeList }
                {/* getMyRequestRes */}
                { myRequestResList }
              </div>
              {/* getMyRequest */}
              { myRequestList.length ? myRequestList : <div className='weui_cells_title'>没有蹭车请求信息。</div> }
            </div>
          </div>
          <Loading visibility={
            loading_get_my_request_res ||
            loading_get_invitation_for_me ||
            loading_get_my_request ||
            loading_del_my_request
          } />
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  },
}

export default connect(state => state)(UserCenterMyRequests)
