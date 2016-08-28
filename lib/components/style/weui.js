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

export class InputCell extends Component {
  render() {
    const { label, children } = this.props
    return (
      <div className='weui_cell'>
        <div className='weui_cell_hd'><label className='weui_label'>{label}</label></div>
        <div className='weui_cell_primary'>{children}</div>
      </div>
    )
  }
}

export class SwitchCell extends Component {
  render() {
    const { label, children } = this.props
    return (
      <div className='weui_cell weui_cell_switch'>
        <div className='weui_cell_hd weui_cell_primary'>{label}</div>
        <div className='weui_cell_ft'>{children}</div>
      </div>
    )
  }
}

export class UploadCell extends Component {
  render() {
    const { label, children } = this.props
    return (
      <div className='weui_cell'>
        <div className='weui_cell_bd weui_cell_primary'>
          <div className='weui_uploader'>
            <div className='weui_uploader_hd weui_cell'>
              <div className='weui_cell_bd weui_cell_primary'>{label}</div>
            </div>
            <div className='weui_uploader_bd'>{children}</div>
          </div>
        </div>
      </div>
    )
  }
}
