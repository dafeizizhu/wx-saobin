import { 
  fetchRequestForMeList,
  fetchInvitationList,
  fetchRequestList
} from '../../actions/routes/user-center-my-requests'

export default {
  'onEnter': store => {
    return ({ location }) => {
      if (location.query.inited) return

      const { user_id } = store.getState().app.state.user
      if (user_id) {
        store.dispatch(fetchRequestForMeList({ user_id }))
        store.dispatch(fetchInvitationList({ user_id }))
        store.dispatch(fetchRequestList({ user_id }))
      }
    }
  }
}
