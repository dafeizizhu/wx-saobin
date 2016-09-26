import React, { Component } from 'react'

import { Cell } from './style/weui'

class TravelInfo extends Component {
  render() {
    const { destination_name, passenger_num, departure_time, reward, vehicle_brand, vehicle_model } = this.props
    return (
      <div className='weui_cells'>
        <Cell label='目的地'>{ destination_name }</Cell>
        <Cell label='可载人数'>{ passenger_num }</Cell>
        <Cell label='出发日期'>{ departure_time }</Cell>
        <Cell label='理想酬劳'>{ reward }刀/人</Cell>
        <Cell label='坐骑'>{ vehicle_brand + ' ' + vehicle_model}</Cell>
      </div>
    )
  }
}

export default TravelInfo
