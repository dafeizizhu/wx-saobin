export const MapFactory = (function () {
  return {
    get: id => {
      const map = new AMap.Map(id, {
        zoom: 15,
        center: [113.332378, 23.134099]
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })
      return {
        setCenter: (...args) => map.setCenter.apply(map, args),
        getCenter: (...args) => map.getCenter.apply(map, args)
      }
    }
  }
})()

export class MapApi {
  constructor(options) {
    this.options = $.extend({}, {
      pageSize: 5,
      pageIndex: 1
    }, options)
  }
  startSearch(cb) {
    if (!this.placeSearch) {
      AMap.service('AMap.PlaceSearch', () => {
        this.placeSearch = new AMap.PlaceSearch(this.options)
        if (typeof cb == 'function') cb()
      })
    } else {
      setTimeout(cb, 0)
    }
  }
  search(keyword, cb) {
    const _cb = () => {
      this.placeSearch.search(keyword, (status, result) => {
        if (result.cityList) {
          cb(false, '数量太多Orz...')
          console.log(result)
        } else if (result.poiList) {
          cb(true, status, result.poiList.pois.map(poi => {
            return {
              id: poi.id,
              name: poi.name,
              address: poi.address,
              lat: poi.location.lat,
              lng: poi.location.lng
            }
          }))
        } else {
          cb(false, status)
        }
      })
    }
    this.startSearch(_cb)
  }
  getAddress(loc, cb) {
    const _cb = () => {
      this.geocoder.getAddress(loc, (status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          cb(result.regeocode.addressComponent.building || 
            result.regeocode.addressComponent.street ||
            result.regeocode.formattedAddress)
        } else {
          cb('地图位置')
        }
      })
    }
    this.startGetAddress(_cb)
  }
  startGetAddress(cb) {
    if (!this.geocoder) {
      AMap.service('AMap.Geocoder', () => {
        this.geocoder = new AMap.Geocoder({ radius: 1000, extensions: 'all' })
        if (typeof cb == 'function') cb()
      })
    } else {
      setTimeout(cb, 0)
    }
  }
}
