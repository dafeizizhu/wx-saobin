import { hashHistory } from 'react-router'

export function show(options, onOk, onCancel) {
  var okCallbackName = 'location_picker_ok_' + new Date().valueOf()
  hashHistory.push({
    pathname: '/common/location-picker',
    query: {
      okCallbackName
    }
  })
  window[okCallbackName] = (loc, name) => {
    delete window[okCallbackName]
    onOk(loc, name)
  }
}

export default {
  show
}
