import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, search, fetchWeather} from '../actions'




class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: 'newzealand'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    })
  }

 render(){
   return (
    <div>
    <button onClick={() => {
      this.props.dispatch(fetchWeather())
      this.props.dispatch(fetchPosts(this.state.search))}
    
    }>
      Fetch Posts
    </button>
    <form>
      <input type="text" onChange={this.handleChange} placeholder="find another subreddit"></input>
    </form>
    </div>
   )
 }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchReddit: (searchTerm) => {
//       dispatch(search(searchTerm))
//     }
//   }
// }


export default connect()(LoadSubreddit)
