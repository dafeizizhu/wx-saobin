import React, { Component } from 'react'
import throttle from 'lodash.throttle'

import { Cell, SearchBar } from './style/weui'
import { MapFactory, MapApi } from '../utils/map-api'

class LocationPicker extends Component {
  componentDidMount() {
    const { id } = this.props
    this.map = MapFactory.get(id)
    this.map.addListener('center_changed', () => {
      this.map.getCenter(center => {
        if (center.lng != this.setCenterLng || center.lat != this.setCenterLat) {
          const { onCenterChange } = this.props
          if (typeof onCenterChange == 'function') onCenterChange(center)
        }
      })
    })
  }
  handleSearchSubmit(value) {
    const { onSearchSubmit, searchTips } = this.props
    if (searchTips && searchTips.length) {
      this.setCenterLng = searchTips[0].lng
      this.setCenterLat = searchTips[0].lat
      console.log({ lng: this.setCenterLng, lat: this.setCenterLat })
      this.map.setCenter([searchTips[0].lng, searchTips[0].lat])
    }
    if (typeof onSearchSubmit == 'function') onSearchSubmit(value)
  }
  handleSearchChange(value) {
    const { onSearchChange } = this.props
    if (typeof onSearchChange == 'function') onSearchChange(value)
  }
  handleSearchTipClick(loc) {
    this.setCenterLng = loc.lng
    this.setCenterLat = loc.lat
    this.map.setCenter([loc.lng, loc.lat])
    const { onSearchTipClick } = this.props
    if (typeof onSearchTipClick == 'function') onSearchTipClick(loc)
  }
  handleOkClick() {
    const { onOkClick } = this.props
    if (typeof onOkClick == 'function') onOkClick()
  }
  handleCancelClick() {
    const { onCancelClick } = this.props
    if (typeof onCancelClick == 'function') onCancelClick()
  }
  handleSearchCancel() {
    const { onSearchCancel } = this.props
    if (typeof onSearchCancel == 'function') onSearchCancel()
  }
  render() {
    const { id, searchTips, result } = this.props
    const tips = searchTips.map(tip => (
      <Cell key={tip.id} label={tip.name} onClick={this.handleSearchTipClick.bind(this, tip)} />
    ))
    const searchShow = (
      <div id='search_show' className='weui_cells weui_cells_access' style={styles.searchShow}>{ tips }</div>
    )
    return (
      <div style={styles.container}>
        <div style={styles.search}>
          <SearchBar
            onSubmit={this.handleSearchSubmit.bind(this)}
            onChange={this.handleSearchChange.bind(this)}
            onCancel={this.handleSearchCancel.bind(this)} />
          { searchShow }
        </div>
        <div id={id} style={styles.map}></div>
        <img style={styles.marker} src={require('../images/mark_bs.png')} />
        { result ?  <div style={styles.result}>{ result.name }</div> : '' }
        <div style={styles.bottons}>
          <div className='weui_btn_area'>
            <button className='weui_btn weui_btn_primary' onClick={this.handleOkClick.bind(this)}>确定</button>
            <button className='weui_btn weui_btn_default' onClick={this.handleCancelClick.bind(this)}>取消</button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
  },
  map: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  search: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '44px',
    zIndex: 3,
  },
  searchShow: {
    position: 'absolute',
    width: '100%',
    marginTop: 0
  },
  bottons: {
    position: 'fixed',
    height: '123px',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3
  },
  marker: {
    position: 'fixed',
    zIndex: 2,
    top: '50%',
    left: '50%',
    marginLeft: '-10px',
    marginTop: '-30px',
    width: '20px',
    height: '30px'
  },
  result: {
    position: 'fixed',
    zIndex: 2,
    top: '50%',
    left: '50%',
    padding: '5px',
    width: '200px',
    marginLeft: '-100px',
    marginTop: '10px',
    backgroundColor: 'rgb(255, 255, 255)',
    textAlign: 'center'
  }
}

export default LocationPicker
