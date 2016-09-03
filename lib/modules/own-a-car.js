import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { changeType, changeCount, changeCarType } from '../actions/routes/own-a-car'
import { SelectCell, Cell, InputCell } from '../components/style/weui'

class OwnACar extends Component {
  handleTypeChange(evt) {
    const { dispatch } = this.props
    dispatch(changeType(Number(evt.target.value)))
  }
  handleCountChange(evt) {
    const { dispatch } = this.props
    dispatch(changeCount(Number(evt.target.value)))
  }
  handleCarTypeChange(evt) {
    const { dispatch } = this.props
    dispatch(changeCarType(evt.target.value))
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const { dispatch } = this.props
    hashHistory.push('/own-a-car/rs')
  }
  handleDepartureClick() {
    hashHistory.push('/own-a-car/departure')
  }
  handleDestinationClick() {
    hashHistory.push('/own-a-car/destination')
  }
  render() {
    const { type, passenger_num, vehicle_id, departure, destination } = this.props.app.routes.ownACar
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    const vehicleOptions = ['宝马', '奔驰', '奥迪'].map(vehicleId => <option key={vehicleId} value={vehicleId}>{vehicleId}</option>)
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{ textAlign: 'center' }}>发布行程</h1>
        <div className='weui_cells_title'>行程类型</div>
        <div className='weui_cells weui_cells_radio'>
          <label className='weui_cell weui_check_label' htmlFor='x11'>
            <div className='weui_cell_bd weui_cell_primary'><p>我有目的地</p></div>
            <div className='weui_cell_ft'>
              <input type='radio' value='0' className='weui_check' name='type' id='x11' defaultChecked='checked' onChange={this.handleTypeChange.bind(this)} />
              <span className='weui_icon_checked'></span>
            </div>
          </label>
          <label className='weui_cell weui_check_label' htmlFor='x12'>
            <div className='weui_cell_bd weui_cell_primary'><p>赚外快</p></div>
            <div className='weui_cell_ft'>
              <input type='radio' value='1' className='weui_check' name='type' id='x12' onChange={this.handleTypeChange.bind(this)} />
              <span className='weui_icon_checked'></span>
            </div>
          </label>
        </div>
        <div className='weui_cells weui_cells_access'>
          <SelectCell label='可载人数'>
            <select className='weui_select' name='passenger_num' defaultValue={passenger_num} onChange={this.handleCountChange.bind(this)}>{ passengerNumOptions }</select>
          </SelectCell>
          <Cell label='选择出发地点' onClick={this.handleDepartureClick.bind(this)}>{departure}</Cell>
          <Cell label='目的地' onClick={this.handleDestinationClick.bind(this)}>{destination}</Cell>
          <InputCell label='出发时间'><input className='weui_input' type='datetime-local' /></InputCell>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>理想酬劳</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <input className='weui_input' type='number' />
            </div>
            <div className='weui_cell_ft'>刀/人</div>
          </div>
          <SelectCell label='坐骑类型'>
            <select className='weui_select' name='vehicle_id' defaultValue={vehicle_id} onChange={this.handleCarTypeChange.bind(this)}>{ vehicleOptions }</select>
          </SelectCell>
        </div>
        <div className='weui_btn_area'>
          <input type='submit' value={ type == 0 ? '发布' : '搜索' } className='weui_btn weui_btn_primary' />
        </div>
      </form>
    )
  }
}

export default connect(state => state)(OwnACar)
