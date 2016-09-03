import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { changeType, changeCount, changeCarType } from '../actions/routes/own-a-car'

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
    const { type, count, carType } = this.props.app.routes.ownACar

    hashHistory.push('/own-a-car/rs')
  }
  handleOriginClick() {
    hashHistory.push('/own-a-car/origin')
  }
  render() {
    const { type, count, carType, departure } = this.props.app.routes.ownACar
    const countOptions = [1, 2, 3, 4, 5, 6, 7].map(count => <option key={count} value={count}>{count}</option>)
    const carTypeOptions = ['宝马', '奔驰', '奥迪'].map(carType => <option key={carType} value={carType}>{carType}</option>)
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
          <div className='weui_cell weui_cell_select'>
            <div className='weui_cell_hd'>
              <label className='weui_label' style={{paddingLeft: '15px'}}>可载人数</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <select className='weui_select' name='count' defaultValue={count} onChange={this.handleCountChange.bind(this)}>{ countOptions }</select>
            </div>
          </div>
          <div className='weui_cell' onClick={this.handleOriginClick.bind(this)}>
            <div className='weui_cell_hd'>
              <label className='weui_label'>选择出发地点</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'></div>
            <div className='weui_cell_ft'>{departure}</div>
          </div>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>目的地</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'></div>
            <div className='weui_cell_ft'>深圳骚斌的家</div>
          </div>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>出发时间</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <input className='weui_input' type='datetime-local' />
            </div>
          </div>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>理想酬劳</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <input className='weui_input' type='number' />
            </div>
            <div className='weui_cell_ft'>刀/人</div>
          </div>
          <div className='weui_cell weui_cell_select'>
            <div className='weui_cell_hd'>
              <label className='weui_label' style={{paddingLeft: '15px'}}>坐骑类型</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <select className='weui_select' name='carType' defaultValue={carType} onChange={this.handleCarTypeChange.bind(this)}>{ carTypeOptions }</select>
            </div>
          </div>
        </div>
        <div className='weui_btn_area'>
          <input type='submit' value={ type == 0 ? '发布' : '搜索' } className='weui_btn weui_btn_primary' />
        </div>
      </form>
    )
  }
}

export default connect(state => state)(OwnACar)
