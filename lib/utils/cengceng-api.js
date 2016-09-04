const DATA_SOURCE = {
  'publishTravel': './fixture/public-travel.json',
  'searchTravel': './fixture/search-travel.json'
}

export function publishTravel(params, cb) {
  params = $.extend({}, {
    user_id: '',
    passenger_num: 0,
    departure_longtitude: 0.0,
    departure_latitude: 0.0,
    destination_longtitude: 0.0,
    destination_latitude: 0.0,
    departure_time: '20160101',
    reward: 0.0,
    vehicle_id: 0, 
    remark: ''
  }, params)

  $.getJSON(DATA_SOURCE['publishTravel'], params, data => {
    data = $.extend({}, {
      msg: '',
      error_code: -1
    }, data)
    cb(data)
  })
}

export function searchTravel(params, cb) {
  params = $.extend({}, {
    passenger_num: 0,
    departure_longtitude: 0.0,
    departure_latitude: 0.0,
    destination_longtitude: 0.0,
    destination_latitude: 0.0,
    departure_time: '20160904'
  }, params)

  $.getJSON(DATA_SOURCE['searchTravel'], params, data => {
    data = $.extend({}, {
      msg: '',
      err_code: -1
    }, data)
    cb(data)
  })
}
