import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import DocumentTitle  from 'react-document-title'

import { 
  changeType, 
  changePassengerNum, 
  changeDepartureTime,
  changeReward,
  changeRemark,
  changeVehicleId, 
  fetchPublish,
  fetchSearch
} from '../actions/routes/own-a-car'
import { SelectCell, Cell, InputCell } from '../components/style/weui'
import Loading from '../components/loading'

class OwnACar extends Component {
  handleTypeChange(evt) {
    const { dispatch } = this.props
    dispatch(changeType(Number(evt.target.value)))
  }
  handlePassengerNumChange(evt) {
    const { dispatch } = this.props
    dispatch(changePassengerNum(Number(evt.target.value)))
  }
  handleVehicleIdChange(evt) {
    const { dispatch } = this.props
    dispatch(changeVehicleId(evt.target.value))
  }
  handlePublish(evt) {
    evt.preventDefault()
    const { dispatch } = this.props
    const { user_id } = this.props.app.state.user
    const {
      passenger_num,
      departure_longtitude,
      departure_latitude,
      destination_longtitude,
      destination_latitude,
      departure_time,
      reward,
      vehicle_id, 
      remark
    } = this.props.app.routes.ownACar
    dispatch(fetchPublish({
      user_id,
      passenger_num,
      departure_longtitude,
      departure_latitude,
      destination_longtitude,
      destination_latitude,
      departure_time,
      reward,
      vehicle_id, 
      remark
    }))
  }
  handleSearch(evt) {
    evt.preventDefault()
    const { dispatch } = this.props
    const {
      passenger_num,
      departure_longtitude,
      departure_latitude,
      vehicle_id
    } = this.props.app.routes.ownACar
    dispatch(fetchSearch({
      passenger_num,
      departure_longtitude,
      departure_latitude,
      vehicle_id
    }))
  }
  handleDepartureClick() {
    hashHistory.push('/own-a-car/departure')
  }
  handleDestinationClick() {
    hashHistory.push('/own-a-car/destination')
  }
  handleDepartureTimeChange(evt) {
    const { dispatch } = this.props
    dispatch(changeDepartureTime(evt.target.value))
  }
  handleRewardChange(evt) {
    const { dispatch } = this.props
    dispatch(changeReward(evt.target.value))
  }
  handleRemarkChange(evt) {
    const { dispatch } = this.props
    dispatch(changeRemark(evt.target.value))
  }
  render() {
    const { type, passenger_num, vehicle_id, departure, destination, departure_time, reward, remark, loading } = this.props.app.routes.ownACar
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    const vehicleOptions = ['宝马', '奔驰', '奥迪'].map(vehicleId => <option key={vehicleId} value={vehicleId}>{vehicleId}</option>)
    return (
      <DocumentTitle title='我有车'>
        <form onSubmit={type == 0 ? this.handlePublish.bind(this) : this.handleSearch.bind(this)}>
          <h1 style={{ textAlign: 'center' }}>发布行程</h1>
          <div className='weui_cells_title'>行程类型</div>
          <div className='weui_cells weui_cells_radio'>
            <label className='weui_cell weui_check_label' htmlFor='x11'>
              <div className='weui_cell_bd weui_cell_primary'><p>我有目的地</p></div>
              <div className='weui_cell_ft'>
                <input type='radio' value='0' className='weui_check' name='type' id='x11' defaultChecked={ type == 0} onChange={this.handleTypeChange.bind(this)} />
                <span className='weui_icon_checked'></span>
              </div>
            </label>
            <label className='weui_cell weui_check_label' htmlFor='x12'>
              <div className='weui_cell_bd weui_cell_primary'><p>赚外快</p></div>
              <div className='weui_cell_ft'>
                <input type='radio' value='1' className='weui_check' name='type' id='x12' defaultChecked={ type == 1} onChange={this.handleTypeChange.bind(this)} />
                <span className='weui_icon_checked'></span>
              </div>
            </label>
          </div>
          <div className='weui_cells weui_cells_access'>
            <SelectCell label='可载人数'>
              <select className='weui_select' defaultValue={passenger_num} onChange={this.handlePassengerNumChange.bind(this)}>{ passengerNumOptions }</select>
            </SelectCell>
            <Cell label='选择出发地点' onClick={this.handleDepartureClick.bind(this)}>{departure}</Cell>
            { type == 0 ?
            <Cell label='目的地' onClick={this.handleDestinationClick.bind(this)}>{destination}</Cell> : ''}
            { type == 0 ?
            <InputCell label='出发时间'>
              <input className='weui_input' type='datetime-local' defaultValue={departure_time} onChange={this.handleDepartureTimeChange.bind(this)}/>
            </InputCell> : '' }
            { type == 0 ?
            <InputCell label='理想酬劳'>
              <input className='weui_input' type='number' placeholder='刀/人' defaultValue={reward} onChange={this.handleRewardChange.bind(this)}/>
            </InputCell> : '' }
            <SelectCell label='坐骑类型'>
              <select className='weui_select' name='vehicle_id' defaultValue={vehicle_id} onChange={this.handleVehicleIdChange.bind(this)}>{ vehicleOptions }</select>
            </SelectCell>
            { type == 0 ?
            <InputCell label='备注'>
              <input className='weui_input' defaultValue={remark} onChange={this.handleRemarkChange.bind(this)}/>
            </InputCell> : '' }
          </div>
          <div className='weui_btn_area'>
            <input type='submit' value={ type == 0 ? '发布' : '搜索' } className='weui_btn weui_btn_primary' />
          </div>
          <Loading visibility={loading} />
        </form>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(OwnACar)
