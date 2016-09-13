import { fetchInit, leave } from '../../actions/routes/user-center-personal-info'

import userCenterMyTravels from './user-center-my-travels'
import userCenterMyRequests from './user-center-my-requests'

const map = {
  'user-center-personal-info': {
    'onEnter': store => {
      return () => {
        const { user_id } = store.getState().app.state.user
        if (user_id) {
          store.dispatch(fetchInit({ user_id }))
        }
      }
    },
    'onLeave': store => {
      return () => {
        store.dispatch(leave())
      }
    }
  },
  'user-center-my-travels': userCenterMyTravels,
  'user-center-my-requests': userCenterMyRequests
}

export function get(route, flag, store) {
  if (typeof map[route] != 'object') return () => {}
  if (typeof map[route][flag] != 'function') return () => {}
  return map[route][flag](store)
}

export default {
  get
}
