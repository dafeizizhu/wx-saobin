import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import DocumentTitle  from 'react-document-title'

import UserCenterNav from '../components/user-center-nav'
import { Cell, InputCell, SelectCell } from '../components/style/weui'
import {
  changePassengerNum,
  changeDepartureTime,
  changeReward,
  changeVehicleId,
  changeRemark,
  changeDeparture,
  changeDestination,
  fetchDelMyTravel
} from '../actions/routes/user-center-my-travels'
import { beginRequest } from '../actions/routes/user-center-my-travels-request'
import locationPicker from '../utils/location-picker'
import { begin } from '../actions/routes/user-center-my-travels-invitation'
import { STATUS_LABELS } from '../utils/constants'
import Loading from '../components/loading'

class UserCenterMyTravels extends Component {
  handleRequestClick(item) {
    const { dispatch } = this.props
    dispatch(beginRequest(item))
    hashHistory.push('/user-center/my-travels/request')
  }
  handleInvitationClick(item) {
    const { dispatch } = this.props
    dispatch(begin(item))
    hashHistory.push('/user-center/my-travels/invitation')
  }
  handlePassengerNumChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changePassengerNum(Number(evt.target.value), item))
  }
  handleDepartureTimeChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeDepartureTime(evt.target.value, item))
  }
  handleRewardChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeReward(Number(evt.target.value), item))
  }
  handleVehicleIdChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeVehicleId(evt.target.value, item))
  }
  handleRemarkChange(item, evt) {
    const { dispatch } = this.props
    dispatch(changeRemark(evt.target.value, item))
  }
  handleDepartureNameClick(item, evt) {
    const { dispatch } = this.props
    locationPicker.show({
      redirect: '/user-center/my-travels?inited=true'
    }, (loc, name) => {
      dispatch(changeDeparture(loc, name, item))
    })
  }
  handleDestinationNameClick(item, evt) {
    const { dispatch } = this.props
    locationPicker.show({
      redirect: '/user-center/my-travels?inited=true'
    }, (loc, name) => {
      dispatch(changeDestination(loc, name, item))
    })
  }
  handleTravelCancelClick(item, evt) {
    evt.preventDefault()
    if (item.status == '3') return
    const { dispatch } = this.props
    const { user_id } = this.props.app.state.user
    dispatch(fetchDelMyTravel(user_id, item.travel_id))
  }
  handleTravelSaveClick(item, evt) {
    evt.preventDefault()
    if (item.status == '3') return
  }
  render() {
    const { 
      my_travel_list, request_for_me_list, my_invitation_res_list,
      loading_get_my_travel, loading_get_request_for_me, loading_get_my_invitation_res, loading_del_my_travel
    } = this.props.app.routes.userCenterMyTravels
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    const vehicleIdOptions = ['宝马', '奔驰', '奥迪'].map(vehicleId => <option key={vehicleId} value={vehicleId}>{vehicleId}</option>)
    const myTravelList = my_travel_list.map((item, index) => {
      let saveButtonClassName = 'weui_btn weui_btn_primary'
      if (item.status == '3') saveButtonClassName += ' weui_btn_disabled'
      let cancelButtonClassName = 'weui_btn weui_btn_default'
      if (item.status == '3') cancelButtonClassName += ' weui_btn_disabled'
      return (
        <form key={item.travel_id}>
          <div className='weui_cells_title'>行程{index}</div>
          <div className='weui_cells weui_cells'>
            <Cell label='选择出发地点' onClick={this.handleDepartureNameClick.bind(this, item)}>{item.departure_addr}</Cell>
            <Cell label='目的地' onClick={this.handleDestinationNameClick.bind(this, item)}>{item.destination_addr}</Cell>
            <Cell label='状态'>{STATUS_LABELS[item.status]}</Cell>
            <SelectCell label='可载人数'>
              <select className='weui_select' defaultValue={item.passenger_num} onChange={this.handlePassengerNumChange.bind(this, item)}>{ passengerNumOptions }</select>
            </SelectCell>
            <InputCell label='出发时间'>
              <input className='weui_input' type='datetime-local' defaultValue={item.departure_time} onChange={this.handleDepartureTimeChange.bind(this, item)} />
            </InputCell>
            <InputCell label='理想酬劳'>
              <input className='weui_input' type='number' defaultValue={item.reward} onChange={this.handleRewardChange.bind(this, item)} placeholder='刀/人' />
            </InputCell>
            <SelectCell label='坐骑类型'>
              <select className='weui_select' defaultValue={item.vehicle_id} onChange={this.handleVehicleIdChange.bind(this, item)}>{ vehicleIdOptions }</select>
            </SelectCell>
            <InputCell label='备注'>
              <input className='weui_input' defaultValue={item.remark} onChange={this.handleRemarkChange.bind(this, item)} />
            </InputCell>
          </div>
          <div className='weui_btn_area'>
            <button type='submit' className={ saveButtonClassName } onClick={this.handleTravelSaveClick.bind(this, item)}>保存修改</button>
            <button type='submit' className={ cancelButtonClassName } onClick={this.handleTravelCancelClick.bind(this, item)}>取消行程</button>
          </div>
        </form>
      )
    })
    const requestForMeList = request_for_me_list.filter(item => item.status == '0').map((item, index) => (
      <div key={item.request_id} className='weui_cell' onClick={this.handleRequestClick.bind(this, item)}>
        <i className='weui_icon_info'></i>{item.nick_name}给您发布了蹭车请求
      </div>
    ))
    const myInvitationResList = my_invitation_res_list.map((item, index) => (
      <div key={item.invitation_id} className='weui_cell' onClick={this.handleInvitationClick.bind(this, item)}>
        <i className='weui_icon_info'></i>{item.nick_name}回应了您的请求
      </div>
    ))

    return (
      <DocumentTitle title='用户中心 - 我的行程'>
        <div>
          <div style={styles.container} className='narrow'>
            <UserCenterNav />
            <div style={{ flex: 1 }}>
              <div className='weui_cells'>
                {/* getRequestForMe */}
                { requestForMeList }
                {/* getMyInvitationRes */}
                { myInvitationResList }
              </div>
              {/* getMyTravel */}
              { myTravelList.length ? myTravelList : <div className='weui_cells_title'>没有行程信息。</div> }
            </div>
          </div>
          <Loading visibility={
            loading_get_my_travel ||
            loading_get_request_for_me ||
            loading_get_my_invitation_res ||
            loading_del_my_travel
          } />
        </div>
      </DocumentTitle>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterMyTravels)
