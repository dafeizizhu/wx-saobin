import { 
  fetchGetInvitationForMe,
  fetchGetMyRequestRes,
  fetchGetMyRequest,
} from '../../actions/routes/user-center-my-requests'

export default {
  'onEnter': store => {
    return ({ location }) => {
      if (location.query.inited) return

      const { user_id } = store.getState().app.state.user
      if (user_id) {
        store.dispatch(fetchGetInvitationForMe({ user_id }))
        store.dispatch(fetchGetMyRequestRes({ user_id }))
        store.dispatch(fetchGetMyRequest({ user_id }))
      }
    }
  }
}
