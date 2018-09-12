import {FETCH_WEATHER, RECEIVE_WEATHER} from '../actions'

function weather (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state
    case RECEIVE_WEATHER:
    return action.city
    default:
      return state
  }
}

export default weather
