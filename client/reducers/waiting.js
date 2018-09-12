import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS, 
  FETCH_WEATHER, RECEIVE_WEATHER} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true
    case RECEIVE_POSTS:
      return false
      case RECEIVE_WEATHER:
      return false
    case FETCH_WEATHER:
      return true

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
