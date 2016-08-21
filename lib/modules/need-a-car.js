import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { changeCount } from '../actions/routes/need-a-car'

class NeedACar extends Component {
  handleCountChange(evt) {
    const { dispatch } = this.props
    dispatch(changeCount(Number(evt.target.value)))
  }
  handleSubmit(evt) {
    evt.preventDefault()
    hashHistory.push('/need-a-car/rs')
  }
  render() {
    const { count } = this.props.app.routes.needACar
    const countOptions = [1, 2, 3, 4, 5, 6, 7].map(count => <option key={count} value={count}>{count}</option>)
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{textAlign: 'center'}}>搜索可用车</h1>
        <div className='weui_cells_title'>搜索</div>
        <div className='weui_cells weui_cells_access'>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>选择出发地点</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'></div>
            <div className='weui_cell_ft'>深圳骚斌的家</div>
          </div>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>目的地</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'></div>
            <div className='weui_cell_ft'>深圳骚斌的家</div>
          </div>
          <div className='weui_cell weui_cell_select'>
            <div className='weui_cell_hd'>
              <label className='weui_label' style={{paddingLeft: '15px'}}>乘车人数</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <select className='weui_select' name='count' defaultValue={count} onChange={this.handleCountChange.bind(this)}>{ countOptions }</select>
            </div>
          </div>
          <div className='weui_cell'>
            <div className='weui_cell_hd'>
              <label className='weui_label'>出发时间</label>
            </div>
            <div className='weui_cell_bd weui_cell_primary'>
              <input className='weui_input' type='datetime-local' />
            </div>
          </div>
          <div className='weui_btn_area'>
            <input type='submit' value='搜索' className='weui_btn weui_btn_primary' />
          </div>
        </div>
      </form>
    )
  }
}

export default connect(state => state)(NeedACar)
