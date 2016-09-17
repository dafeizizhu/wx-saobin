import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'

import LocationPicker from '../../components/location-picker'
import { MapApi } from '../../utils/map-api'
import { fetchChange, fetchSubmit, fetchAddress } from '../../actions/routes/common/location-picker'

class LocationPickerModule extends Component {
  constructor({ location }) {
    super()
    this.okCallbackName = location.query.okCallbackName
    this.mapApi = new MapApi()
  }
  handleLocationPickerOkClick(loc, name) {
    if (typeof window[this.okCallbackName] == 'function') {
      window[this.okCallbackName](loc, name)
    }
    hashHistory.goBack()
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
  render() {
    const id = new Date().valueOf().toString(16)
    const { results, result } = this.props.app.routes.common.locationPicker
    return (
      <LocationPicker id={id} searchTips={results} result={result}
        onOkClick={this.handleLocationPickerOkClick.bind(this)} 
        onSearchChange={this.handleLocationPickerSearchChange.bind(this)} 
        onSearchSubmit={this.handleLocationPickerSearchSubmit.bind(this)} 
        onCenterChange={this.handleLocationPickerCenterChange.bind(this)} />
    )
  }
}
export default connect(state => state)(LocationPickerModule)
