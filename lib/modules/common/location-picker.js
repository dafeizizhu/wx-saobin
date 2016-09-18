import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import LocationPicker from '../../components/location-picker'
import { MapApi } from '../../utils/map-api'
import { fetchChange, fetchSubmit, fetchAddress, clearResults, changeResult } from '../../actions/routes/common/location-picker'

class LocationPickerModule extends Component {
  constructor({ location }) {
    super()
    this.okCallbackName = location.query.okCallbackName
    this.mapApi = new MapApi()
  }
  handleLocationPickerSearchChange(value) {
    clearTimeout(this.changeTID)
    this.changeTID = setTimeout(() => {
      const { dispatch } = this.props
      dispatch(fetchChange(value))
    }, 200)
  }
  handleLocationPickerSearchSubmit(value) {
    const { dispatch } = this.props
    dispatch(fetchSubmit(value))
  }
  handleLocationPickerCenterChange(loc) {
    const { dispatch } = this.props
    dispatch(fetchAddress(loc))
  }
  handleLocationPickerSearchCancel() {
    const { dispatch } = this.props
    dispatch(clearResults())
  }
  handleLocationPickerOkClick() {
    const { result } = this.props.app.routes.common.locationPicker
    if (result) {
      const { dispatch } = this.props
      const { lng, lat, name } = result
      const loc = { lng, lat }
      if (typeof window[this.okCallbackName] == 'function') {
        window[this.okCallbackName](loc, name)
      }
      this.end()
    }
  }
  handleLocationPickerCancelClick() {
    this.end()
  }
  end() {
    if (this.redirect) {
      hashHistory.replace(this.redirect)
    } else {
      hashHistory.goBack()
    }
  }
  handleLocationPickerSearchTipClick(loc) {
    const { dispatch } = this.props
    dispatch(changeResult(loc))
  }
  render() {
    const id = new Date().valueOf().toString(16)
    const { results, result } = this.props.app.routes.common.locationPicker
    return (
      <LocationPicker id={id} searchTips={results} result={result}
        onOkClick={this.handleLocationPickerOkClick.bind(this)} 
        onSearchChange={this.handleLocationPickerSearchChange.bind(this)} 
        onSearchSubmit={this.handleLocationPickerSearchSubmit.bind(this)} 
        onCenterChange={this.handleLocationPickerCenterChange.bind(this)} 
        onSearchCancel={this.handleLocationPickerSearchCancel.bind(this)} 
        onOkClick={this.handleLocationPickerOkClick.bind(this)} 
        onCancelClick={this.handleLocationPickerCancelClick.bind(this)}
        onSearchTipClick={this.handleLocationPickerSearchTipClick.bind(this)} />
    )
  }
}
export default connect(state => state)(LocationPickerModule)
