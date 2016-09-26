import { 
  fetchInvitationList, 
  fetchRequestList, 
  fetchTravelList 
} from '../../actions/routes/user-center-my-travels'

export default {
  'onEnter': store => {
    return ({ location }) => {
      if (location.query.inited) return
      const { user_id } = store.getState().app.state.user
      if (user_id) {
        store.dispatch(fetchRequestList({ user_id }))
        store.dispatch(fetchInvitationList({ user_id }))
        store.dispatch(fetchTravelList({ user_id }))
      }
    }
  }
}
