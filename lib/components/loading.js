import React, { Component } from 'react'

require('../styles/loading.css')

class Loading extends Component {
  render() {
    const { visibility } = this.props
    return (
      <div style={Object.assign({}, styles.loader, { visibility: visibility ? 'visible' : 'hidden' })}>
        <div className='loader'>
          <div className='ball-pulse'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  loader: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'fixed',
    top: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Loading
