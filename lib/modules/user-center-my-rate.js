import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserCenterNav from '../components/user-center-nav'
import ItineraryInfo from '../components/itinerary-info'

class UserCenterMyRate extends Component {
  render() {
    return (
      <div style={styles.container}>
        <UserCenterNav />
        <div style={{flex: 1}}>
          <ItineraryInfo />
          <div className='weui_btn_area'>
            <button className='weui_btn weui_btn_primary'>评价车主</button>
          </div>
        </div>
      </div>
    )
  }
}
 
const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterMyRate)
