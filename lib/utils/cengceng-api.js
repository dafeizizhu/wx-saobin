const DATA_SOURCE = {
  'publishTravel': './fixture/publish-travel.json',
  'searchRequest': './fixture/search-request.json',
  'searchTravel_1': './fixture/search-travel.json',
  'searchTravel_2': './fixture/search-travel-empty.json',
  'publishRequest': './fixture/publish-request.json',
  'getUserInfo': './fixture/get-user-info.json'
}

export function publishTravel(params, cb) {
  params = $.extend({}, {
    user_id: '',
    passenger_num: 0,
    departure_name: '',
    departure_longtitude: 0.0,
    departure_latitude: 0.0,
    destination_name: '',
    destination_longtitude: 0.0,
    destination_latitude: 0.0,
    departure_time: '20160101',
    reward: 0.0,
    vehicle_id: 0, 
    remark: ''
  }, params)

  $.ajax({
    type: 'GET',
    url: DATA_SOURCE['publishTravel'],
    dataType: 'json',
    data: params,
    success: data => {
      data = $.extend({}, {
        msg: '',
        error_code: -1
      }, data)
      if (data.error_code >= 0) {
        const {
          passenger_num,
          departure_longtitude,
          departure_latitude,
          vehicle_id
        } = params
        searchRequest({
          passenger_num,
          departure_longtitude,
          departure_latitude,
          vehicle_id
        }, (searchData) => {
          cb($.extend({}, data, {
            // shim
            request_list: searchData.request_list ? searchData.request_list.map((item, index) => $.extend({}, {
              id: index,
              avatar: 'https://team.weui.io/avatar/bear.jpg'
            }, item)) : []
          }))
        })
      } else {
        cb(data)
      }
    },
    error: (xhr, type) => {
      cb({
        error_code: -1,
        message: 'Ajax Error ' + type
      })
    }
  })
}

export function searchRequest(params, cb) {
  params = $.extend({}, {
    passenger_num: 0,
    departure_longtitude: 0.0,
    departure_latitude: 0.0,
    departure_name: '',
    vehicle_id: ''
  }, params)

  $.ajax({
    type: 'GET',
    url: DATA_SOURCE['searchRequest'],
    dataType: 'json',
    data: params,
    success: data => {
      data = $.extend({}, {
        msg: '',
        error_code: -1
      }, data, {
        request_list: data.request_list ? data.request_list.map((item, index) => $.extend({}, {
          id: index,
          avatar: 'https://team.weui.io/avatar/bear.jpg'
        }, item)) : []
      })
      cb(data)
    },
    error: (xhr, type) => {
      cb({
        error_code: -1,
        message: 'Ajax Error ' + type
      })
    }
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

  $.ajax({
    type: 'GET',
    url: DATA_SOURCE['searchTravel_' + params.passenger_num],
    dataType: 'json',
    data: params,
    success: data => {
      data = $.extend({}, {
        msg: '',
        err_code: -1
      }, data, {
        travel_list: data.travel_list ? data.travel_list.map((item, index) => $.extend({}, {
          id: index,
          avatar: 'https://team.weui.io/avatar/bear.jpg'
        }, item)) : []
      })
      cb(data)
    },
    error: (xhr, type) => {
      cb({
        error_code: -1,
        message: 'Ajax Error ' + type
      })
    }
  })
}

export function publishRequest(params, cb) {
  params = $.extend({}, {
    user_id: '',
    passenger_num: 0,
    departure_longtitude: 0.0,
    departure_latitude: 0.0,
    destination_longtitude: 0.0,
    destination_latitude: 0.0,
    departure_time: '20160904'
  }, params)

  $.ajax({
    type: 'GET',
    url: DATA_SOURCE['publishRequest'],
    dataType: 'json',
    data: params,
    success: data => {
      data = $.extend({}, {
        error_code: -1,
        msg: ''
      }, data)
      cb(data)
    },
    error: (xhr, type) => {
      cb({
        error_code: -1,
        msg: 'Ajax Error ' + type
      })
    }
  })
}

export function getUserInfo(params, cb) {
  params = $.extend({}, {
    user_id: ''
  }, params)

  const defaultData = {
    school: '',
    name: '',
    nick_name: '',
    email: '',
    pwd: '',
    enrollment_t: '',
    graduation_t: '',
    is_driver: false,
    license_no: '',
    license_pic: '',
    vehicle_1_brand: '',
    vehicle_1_model: '',
    vehicle_1_num: 0,
    vehicle_1_pic: '',
    vehicle_2_brand: '',
    vehicle_2_model: '',
    vehicle_2_num: '',
    vehicle_2_pic: 0
  }

  $.ajax({
    type: 'GET',
    url: DATA_SOURCE['getUserInfo'],
    dataType: 'json',
    data: params,
    success: data => {
      data = $.extend({}, defaultData, data)
      cb(data)
    },
    error: (xhr, type) => {
      cb(defaultData)
    }
  })
}
      
