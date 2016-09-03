import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

export class Cell extends Component {
  render() {
    const { label, children, onClick } = this.props
    return (
      <div className='weui_cell' onClick={onClick}>
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

export class SearchBar extends Component {
  componentDidMount() {
    const that = this
    $('#root').on('focus', '#search_input', function () {
      var $weuiSearchBar = $('#search_bar')
      $weuiSearchBar.addClass('weui_search_focusing')
    }).on('blur', '#search_input', function () {
      var $weuiSearchBar = $('#search_bar')
      $weuiSearchBar.removeClass('weui_search_focusing')
    }).on('input', '#search_input', function () {
      var $searchShow = $("#search_show")
      const { onChange } = that.props
      if (findDOMNode(that.refs.search_input)) {
        const value = findDOMNode(that.refs.search_input).value
        if (typeof onChange == 'function') onChange(value)
      }
    }).on('touchend', '#search_cancel', function () {
      $('#search_input').val('')
      const { onSubmit } = that.props
      if (typeof onSubmit == 'function') onSubmit()
    }).on('touchend', '#search_clear', function () {
      $('#search_input').val('')
      const { onSubmit } = that.props
      if (typeof onSubmit == 'function') onSubmit()
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const { onSubmit } = this.props
    const value = findDOMNode(this.refs.search_input).value
    if (typeof onSubmit == 'function') onSubmit(value)
  }
  render() {
    return (
      <div className='weui_search_bar' id='search_bar'>
        <form className='weui_search_outer' onSubmit={this.handleSubmit.bind(this)}>
          <div className='weui_search_inner'>
            <i className='weui_icon_search'></i>
            <input type='search' className='weui_search_input' id='search_input' placeholder='搜索' required='' ref='search_input'/>
            <a href='javascript:' className='weui_icon_clear' id='search_clear'></a>
          </div>
          <label htmlFor='search_input' className='weui_search_text' id='search_text'>
            <i className='weui_icon_search'></i>
            <span>搜索</span>
          </label>
        </form>
        <a href='javascript:' className='weui_search_cancel' id='search_cancel'>取消</a>
      </div>
    )
  }
}

export class SelectCell extends Component {
  render() {
    const { label, children } = this.props
    return (
      <div className='weui_cell weui_cell_select'>
        <div className='weui_cell_hd'>
          <label className='weui_label' style={{paddingLeft: '15px'}}>{ label }</label>
        </div>
        <div className='weui_cell_bd weui_cell_primary'>{ children }</div>
      </div>
    )
  }
}

