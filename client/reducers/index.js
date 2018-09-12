import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import weather from './weather'

export default combineReducers({
  errorMessage,
  subreddits,
  weather,
  waiting
})
