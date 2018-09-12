import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits, weather}) => (
  <div>
    {/* {console.log(subreddits)}
    {console.log(weather)} */}
    
    <h1>Weather for: {weather[0].length > 0 && weather[0].city.name  }
     will be </h1>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        date={post.created}
        selftext={post.selftext}
        media={post.media_embed.content || ''}
      />
    ) 
    }
    {console.log(weather)}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits,
    weather: [state.weather]
  }
}

export default connect(
  mapStateToProps
)(Subreddit)

//masterreturns