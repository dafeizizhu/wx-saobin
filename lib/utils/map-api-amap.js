export const MapFactory = (function () {
  return {
    get: id => {
      const map = new AMap.Map(id, {
        zoom: 15,
        center: [113.332378, 23.134099]
      })
      return {
        setCenter: (...args) => map.setCenter.apply(map, args),
        getCenter: cb => cb(map.getCenter()),
        addListener: () => {}
      }
    }
  }
})()

export class MapApi {
  constructor(options) {
    options = options || {}
    this.options = {
      pageSize: options.pageSize || 5,
      pageIndex: options.pageIndex || 1
    }
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
          cb([], '数量太多Orz...')
          console.log(result)
        } else if (result.poiList) {
          cb(result.poiList.pois.map(poi => {
            return {
              id: poi.id,
              name: poi.name,
              address: poi.address,
              lat: poi.location.lat,
              lng: poi.location.lng
            }
          }), status)
        } else {
          cb([], status)
        }
      })
    }
    this.startSearch(_cb)
  }
  getAddress(loc, cb) {
    const _cb = () => {
      this.geocoder.getAddress(loc, (status, result) => {
        let name = '地图位置'
        if (status === 'complete' && result.info === 'OK') {
          name = result.regeocode.addressComponent.building || result.regeocode.addressComponent.street || result.regeocode.formattedAddress
        }
        cb(null, {
          id: new Date().valueOf(),
          name,
          lng: loc.lng,
          lat: loc.lat
        })
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

function transformResult(item) {
}
