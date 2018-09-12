import React from 'react'


// = ({title, date, selftext, media}) => (

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      embed: this.props.media
    }
  }

  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
render(){
  return (
    <div>
    <div>{this.props.title} <p>Date: {this.props.date}</p></div>
    <p>{this.props.selftext}</p>
    <div dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.state.embed) }} />
    </div>
  )
}
  
} 
 


export default Post
