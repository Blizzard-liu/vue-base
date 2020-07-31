const getters = {
  requestLoading: state => state.app.requestLoading,
  size: state => state.app.size,
  token: state => state.user.token,
  userInfo: state => state.user.userState,
  userId: state => state.user.userId || localStorage.getItem('USER_ID'),
  username: state => state.user.userState.username,

}
export default getters
