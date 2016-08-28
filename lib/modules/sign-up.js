import React, { Component } from 'react'
import { connect } from 'react-redux'

import PersonalInfo from '../components/personal-info'

class SignUp extends Component {
  render() {
    return (
      <form>
        <PersonalInfo />
        <div className='weui_btn_area'>
          <input className='weui_btn weui_btn_primary' type='submit' value='提交审核' />
        </div>
      </form>
    )
  }
}

export default connect(state => state)(SignUp)
