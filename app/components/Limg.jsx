// - Import react components
import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


// - Import app API
import * as FileAPI from 'FileAPI'


// - Create Limg component class
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
console.log('Limg : ',url);
}



// Render DOM
  render() {

    return(
      <li className="imageGallery__image-node" style={{backgroundImage: 'url(' + this.state.url + ')'}}>

          <div className="imageCover">
            <div className="coverContent">
              <Button circular color='green' icon='add'/>
            </div>
          </div>
      </li>
    )
  }
}
