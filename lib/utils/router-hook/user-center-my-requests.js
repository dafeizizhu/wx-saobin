import { fetchRequestList } from '../../actions/routes/user-center-my-requests'

export default {
  'onEnter': store => {
    return () => {
      const { user_id } = store.getState().app.state.user
      if (user_id) {
        store.dispatch(fetchRequestList({ user_id }))
      }
    }
  }
}
