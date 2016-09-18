export const MapFactory = (() => {
  return {
    get: id => {
      let map
      function ensure(func) {
        return (...args) => {
          if (!map) {
            let tId = setInterval(() => {
              if (typeof google == 'object') {
                map = new google.maps.Map(document.getElementById(id), {
                  center: {lng: 113.332378, lat: 23.134099},
                  zoom: 15,
                  zoomControl: false,
                  mapTypeControl: false,
                  scaleControl: false,
                  streetViewControl: false,
                  rotateControl: false 
                })
                func.apply(null, args)
                clearInterval(tId)
              }
            }, 100)
          } else {
            setTimeout(() => func.apply(null, args), 0)
          }
        }
      }
      ensure(() => { console.log('map inited') })()
      return {
        setCenter: ensure(loc => map.setCenter({ lng: loc[0], lat: loc[1] })),
        getCenter: ensure(cb => {
          const center = map.getCenter()
          cb({
            lng: center.lng(),
            lat: center.lat()
          })
        }),
        addListener: ensure((...args) => map.addListener.apply(map, args))
      }
    }
  }
})()

export class MapApi {
  search(keyword, cb) {
    this.lastKeyword = keyword
    const _cb = () => {
      this.geocoder.geocode({ address: keyword }, (results, status) => {
        if (this.lastKeyword != keyword) {
          // SKIP
        } else {
          if (results && results.length) {
            console.log('search status', status)
            console.log('search results', results)
            cb(results.map(item => transformResult(item), status))
          } else {
            cb([], status)
          }
        }
      })
    }
    this.start(_cb)
  }
  getAddress(loc, cb) {
    this.lastLoc = loc
    const _cb = () => {
      this.geocoder.geocode({ location: loc }, (results, status) => {
        if (this.lastLoc != loc) {
          // SKIP
        } else {
          if (results && results.length) {
            console.log('getAddress status', status)
            console.log('getAddress results', results)
            cb(transformResult(results[0]), status)
          } else {
            cb(null, status)
          }
        }
      })
    }
    this.start(_cb)
  }
  start(cb) {
    if (typeof google == 'object' && this.geocoder) {
      setTimeout(cb, 0)
    } else {
      const tId = setInterval(() => {
        if (typeof google == 'object') {
          this.geocoder = new google.maps.Geocoder()
          clearInterval(tId)
          cb()
        }
      }, 100)
    }
  }
}

const ADDRESS_COMPONENTS_PRIORITIES = ['premise', 'route', 'natural_feature', 'park', 'point_of_interest']

function transformResult(item) {
  const names = []
  item.address_components.forEach((component, i) => {
    component.types.forEach(type => {
      if (ADDRESS_COMPONENTS_PRIORITIES.indexOf(type) >= 0) {
        names.push(component.long_name)
      }
    })
  })

  return {
    id: item.place_id,
    name: names.length ? names[0] : item.formatted_address,
    address: item.formatted_address,
    lat: item.geometry.location.lat(),
    lng: item.geometry.location.lng()
  }
}
