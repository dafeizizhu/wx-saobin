import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import DocumentTitle  from 'react-document-title'

import { SelectCell, Cell, InputCell } from '../components/style/weui'
import {
  changeDepartureTime,
  changePassengerNum,
  fetchSearch
} from '../actions/routes/need-a-car'

class NeedACar extends Component {
  handleSubmit(evt) {
    evt.preventDefault()
    const { dispatch } = this.props
    const {
      passenger_num,
      departure_longtitude,
      departure_latitude,
      destination_longtitude,
      destination_latitude,
      departure_time
    } = this.props.app.routes.needACar
    dispatch(fetchSearch({
      passenger_num,
      departure_longtitude,
      departure_latitude,
      destination_longtitude,
      destination_latitude,
      departure_time
    }))
  }
  handlePassengerNumChange(evt) {
    const { dispatch } = this.props
    dispatch(changePassengerNum(evt.target.value))
  }
  handleDepartureClick() {
    hashHistory.push('/need-a-car/departure')
  }
  handleDestinationClick() {
    hashHistory.push('/need-a-car/destination')
  }
  render() {
    const { departure, destination, departure_time, passenger_num } = this.props.app.routes.needACar
    const passengerNumOptions = [1, 2, 3, 4, 5, 6, 7].map(num => <option key={num} value={num}>{num}</option>)
    return (
      <DocumentTitle title='我要蹭'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1 style={{textAlign: 'center'}}>搜索可用车</h1>
          <div className='weui_cells weui_cells_access'>
            <Cell label='选择出发地点' onClick={this.handleDepartureClick.bind(this)}>{departure}</Cell>
            <Cell label='目的地' onClick={this.handleDestinationClick.bind(this)}>{destination}</Cell>
            <SelectCell label='乘车人数'>
              <select className='weui_select' name='count' defaultValue={passenger_num} onChange={this.handlePassengerNumChange.bind(this)}>{ passengerNumOptions }</select>
            </SelectCell>
            <InputCell label='出发时间'>
              <input className='weui_input' type='datetime-local' defaultValue={departure_time} />
            </InputCell>
            <div className='weui_btn_area'>
              <input type='submit' value='搜索' className='weui_btn weui_btn_primary' />
            </div>
          </div>
        </form>
      </DocumentTitle>
    )
  }
}

export default connect(state => state)(NeedACar)
