import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentTitle  from 'react-document-title'

import UserCenterNav from '../components/user-center-nav'
import ItineraryInfo from '../components/itinerary-info'

class UserCenterMyRate extends Component {
  render() {
    return (
      <DocumentTitle title='用户中心 - 我的评价'>
        <div style={styles.container} className='narrow'>
          <UserCenterNav />
          <div style={{flex: 1}}>
            <ItineraryInfo />
            <div className='weui_btn_area'>
              <button className='weui_btn weui_btn_primary'>评价车主</button>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
 
const styles = {
  container: {
    display: 'flex'
  }
}

export default connect(state => state)(UserCenterMyRate)
