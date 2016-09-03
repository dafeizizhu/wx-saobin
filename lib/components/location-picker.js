import React, { Component } from 'react'

import { Cell, SearchBar } from './style/weui'
import { MapFactory, MapApi } from '../utils/map-api'

class LocationPicker extends Component {
  componentDidMount() {
    const { id } = this.props
    this.map = MapFactory.get(id)
  }
  handleSearchSubmit(value) {
    const { onSearchSubmit, searchTips } = this.props
    if (searchTips && searchTips.length) {
      this.map.setCenter([searchTips[0].lng, searchTips[0].lat])
    }
    if (typeof onSearchSubmit == 'function') onSearchSubmit(value)
  }
  handleSearchChange(value) {
    const { onSearchChange } = this.props
    if (typeof onSearchChange == 'function') onSearchChange(value)
  }
  handleSearchTipClick(loc) {
    this.map.setCenter([loc.lng, loc.lat])
    const { onSearchSubmit } = this.props
    if (typeof onSearchSubmit == 'function') onSearchSubmit()
  }
  handleOkClick() {
    const { onOkClick } = this.props
    if (typeof onOkClick == 'function') {
      if (!this.mapApi) this.mapApi = new MapApi()
      const center = this.map.getCenter()
      this.mapApi.getAddress([center.lng, center.lat], name => {
        onOkClick(this.map.getCenter(), name)
      })
    }
  }
  handleCancelClick() {
    const { onCancelClick } = this.props
    if (typeof onCancelClick == 'function') onCancelClick()
  }
  render() {
    const { id, searchTips } = this.props
    const tips = searchTips.map(tip => (
      <Cell key={tip.id} label={tip.name} onClick={this.handleSearchTipClick.bind(this, tip)} />
    ))
    const searchShow = (
      <div id='search_show' className='weui_cells weui_cells_access' style={styles.searchShow}>{ tips }</div>
    )
    return (
      <div style={styles.container}>
        <div style={styles.search}>
          <SearchBar onSubmit={this.handleSearchSubmit.bind(this)}
            onChange={this.handleSearchChange.bind(this)} />
          { searchShow }
        </div>
        <div id={id} style={styles.map}></div>
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
    display: 'flex',
    flexDirection: 'column'
  },
  map: {
    flex: 1
  },
  search: {
    flex: 'none'
  },
  searchShow: {
    position: 'absolute',
    zIndex: 3,
    width: '100%',
    marginTop: 0
  },
  bottons: {
    flex: 'none'
  }
}

export default LocationPicker
