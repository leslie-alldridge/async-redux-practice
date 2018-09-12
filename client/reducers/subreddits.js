import {RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:

    if (action.date && action.descending && action.filter) {
      console.log('made it to filter')
      console.log(action.filter);
      let newArr = action.posts.filter(post => {
        return post.title.includes(action.filter)
      })
     
    
    console.log('hit me');
    
   
    console.log(newArr);
    
    return newArr
    }
    
    else if (action.date && action.descending){
      console.log('made it to descending')

      let arr = action.posts.sort(function(a, b){
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        return 0;

        
    })
    return arr.reverse()
  }

    else if (action.date){
      console.log('made it to title')
           
            action.posts.sort(function(a, b){
              if(a.title < b.title) return -1;
              if(a.title > b.title) return 1;
              return 0;
          })
          } 

    else {

      console.log('made it to date')
      action.posts.sort(function(a, b){
        if(a.created < b.created) return -1;
        if(a.created > b.created) return 1;
        return 0;
    }
      

  )}

      return action.posts

    default:
      return state
  }
}

export default subreddits
