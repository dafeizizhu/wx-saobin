import { hashHistory } from 'react-router'

export function show(options, onOk, onCancel) {
  const okCallbackName = 'location_picker_ok_' + new Date().valueOf()
  options = $.extend({}, {
    redierct: '',
    okCallbackName
  }, options)
  hashHistory.push({
    pathname: '/common/location-picker',
    query: options
  })
  window[okCallbackName] = (loc, name) => {
    delete window[okCallbackName]
    onOk(loc, name)
  }
}

export default {
  show
}
