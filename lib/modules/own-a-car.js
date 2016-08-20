import React, { Component } from 'react'
import { connect } from 'react-redux'

class OwnACar extends Component {
  render() {
    return <div>Hello world</div>
  }
}

export default connect(state => state)(OwnACar)
