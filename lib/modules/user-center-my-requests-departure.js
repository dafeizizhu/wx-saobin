import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import LocationPicker from '../components/location-picker'
import { fetchSearch, clearTips } from '../actions/routes/user-center-my-requests-departure'
import { changeDeparture } from '../actions/routes/user-center-my-requests'

class UserCenterMyRequestsDeparture extends Component {
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
    const { item } = this.props.app.routes.userCenterMyRequestsDeparture
    dispatch(changeDeparture(loc, name, item))
    hashHistory.replace({
      pathname: '/user-center/my-requests',
      query: { inited: true }
    })
  }
  handleLocationPickerCancelClick() {
    const { dispatch } = this.props
    hashHistory.replace({
      pathname: '/user-center/my-requests',
      query: { inited: true }
    })
  }
  render() {
    const id = new Date().valueOf().toString(16)
    const { tips } = this.props.app.routes.userCenterMyRequestsDeparture.search
    return (
      <LocationPicker id={id} searchTips={tips}
        onSearchSubmit={this.handleLocationPickerSearchSubmit.bind(this)}
        onSearchChange={this.handleLocationPickerSearchChange.bind(this)} 
        onOkClick={this.handleLocationPickerOkClick.bind(this)}
        onCancelClick={this.handleLocationPickerCancelClick.bind(this)} />
    )
  }
}

export default connect(state => state)(UserCenterMyRequestsDeparture)
