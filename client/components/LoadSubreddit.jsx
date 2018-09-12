import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, search, fetchWeather} from '../actions'




class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: 'newzealand',
      filter: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange (e) {
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    })
  }


  handleSearch (e) {
    console.log(this.state);
    this.setState({
      filter: e.target.value
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

    <button onClick={() => {
      this.props.dispatch(fetchPosts(this.state.search, 'date'))}
    }>
      Sort by date / title
    </button>
    <button onClick={() => {
      this.props.dispatch(fetchPosts(this.state.search, 'date', 'descending'))}
    }>
      descending
    </button>



    <form>
      <input type="text" onChange={this.handleSearch} placeholder="filter posts"></input>
    </form>
    <button onClick={() => {
      this.props.dispatch(fetchPosts(this.state.search, 'date', 'descending', this.state.filter))}
    }>
      Filter Posts
    </button>
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
