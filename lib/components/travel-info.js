import React, { Component } from 'react'

import { Cell } from './style/weui'

class TravelInfo extends Component {
  render() {
    return (
      <div className='weui_cells'>
        <Cell label='行程一' />
        <Cell label='目的地'>深圳骚斌的家</Cell>
        <Cell label='可载人数'>4</Cell>
        <Cell label='出发日期'>2016年08月28日</Cell>
        <Cell label='理想酬劳'>100刀/人</Cell>
        <Cell label='坐骑'>宝马</Cell>
      </div>
    )
  }
}

export default TravelInfo
