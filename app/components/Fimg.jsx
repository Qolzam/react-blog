// - Import react components
import React, {Component} from 'react'


// - Import app API
import * as FileAPI from 'FileAPI'


// - Create Fimg component class
export default class Home extends Component {

// Constructor
constructor(props){
  super(props)

  // Default state
  this.state = {
    url: ''
  }

  // Binding functions to `this`
  this.setImageURL = this.setImageURL.bind(this)

FileAPI.downloadFile('images',this.props.src,this.setImageURL)
}

// Set image url via server
setImageURL = (url) => {
this.setState({
  url: url
})
}



// Render DOM
  render() {

    return(
      <img {...this.props} src={this.state.url}/>
    )
  }
}
