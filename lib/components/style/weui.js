import React, { Component } from 'react'

export class Cell extends Component {
  render() {
    const { label, children } = this.props
    return (
      <div className='weui_cell'>
        <div className='weui_cell_bd weui_cell_primary'>{label}</div>
        <div className='weui_cell_ft'>{children}</div>
      </div>
    )
  }
}
