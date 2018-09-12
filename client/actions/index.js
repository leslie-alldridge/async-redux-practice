import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'



const API_KEY = '68d70243486baf9346d8b9250e875114';
const ROOTURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const url = `${ROOTURL}&q=wellington,nz`;

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getWeather = () => {
  return {
    type: FETCH_WEATHER
  }
}

export const receiveWeather = (body) => {
  return {
    type: RECEIVE_WEATHER,
    city: body
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        console.log(res);
        
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchWeather () {
  return (dispatch) => {
    dispatch(getWeather())
    return request
      .get(`${url}`)
      .then(res => {
        console.log(res.body);
        
        dispatch(receiveWeather(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
