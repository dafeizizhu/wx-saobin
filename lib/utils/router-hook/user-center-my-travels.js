import { 
  fetchGetRequestForMe,
  fetchGetMyInvitationRes,
  fetchGetMyTravel
} from '../../actions/routes/user-center-my-travels'

export default {
  'onEnter': store => {
    return ({ location }) => {
      if (location.query.inited) return
      const { user_id } = store.getState().app.state.user
      if (user_id) {
        store.dispatch(fetchGetRequestForMe({ user_id }))
        store.dispatch(fetchGetMyInvitationRes({ user_id }))
        store.dispatch(fetchGetMyTravel({ user_id }))
      }
    }
  }
}
