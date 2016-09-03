import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import LocationPicker from '../components/location-picker'
import { fetchSearch, clearTips } from '../actions/routes/own-a-car-departure'
import { changeDeparture } from '../actions/routes/own-a-car'

class OwnACarDeparture extends Component {
  handleLocationPickerSearchSubmit(value) {
    const { dispatch } = this.props
    dispatch(clearTips())
  }
  handleLocationPickerSearchChange(value) {
    clearTimeout(this.changeTID)
    this.changeTID = setTimeout(() => {
      const { dispatch } = this.props
      dispatch(fetchSearch(value))
    }, 200)
  }
  handleLocationPickerOkClick(loc, name) {
    const { dispatch } = this.props
    dispatch(changeDeparture(loc, name))
    hashHistory.goBack()
  }
  handleLocationPickerCancelClick() {
    const { dispatch } = this.props
    hashHistory.goBack()
  }
  render() {
    const id = new Date().valueOf().toString(16)
    const { tips } = this.props.app.routes.ownACarDeparture.search
    return (
      <LocationPicker id={id} searchTips={tips}
        onSearchSubmit={this.handleLocationPickerSearchSubmit.bind(this)}
        onSearchChange={this.handleLocationPickerSearchChange.bind(this)} 
        onOkClick={this.handleLocationPickerOkClick.bind(this)}
        onCancelClick={this.handleLocationPickerCancelClick.bind(this)} />
    )
  }
}

export default connect(state => state)(OwnACarDeparture)
