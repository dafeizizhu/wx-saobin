import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonalInfo from '../components/personal-info'
import { changeIsDriver, changeMoreVehicle } from '../actions/routes/sign-up'

class SignUp extends Component {
  handlePersonalInfoIsDriverChange(value) {
    const { dispatch } = this.props
    dispatch(changeIsDriver(value))
  }
  handlePersonalInfoMoreVehicleChange(value) {
    const { dispatch } = this.props
    dispatch(changeMoreVehicle(value))
  }
  render() {
    const { is_driver, more_vehicle } = this.props.app.routes.signUp
    return (
      <form>
        <PersonalInfo isDriver={is_driver} moreVehicle={more_vehicle}
          onIsDriverChange={this.handlePersonalInfoIsDriverChange.bind(this)}
          onMoreVehicleChange={this.handlePersonalInfoMoreVehicleChange.bind(this)} />
        <div className='weui_btn_area'>
          <input className='weui_btn weui_btn_primary' type='submit' value='提交审核' />
        </div>
      </form>
    )
  }
}

export default connect(state => state)(SignUp)
