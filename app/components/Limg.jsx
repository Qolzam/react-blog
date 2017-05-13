// - Import react components
import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

// - Import app API
import * as FileAPI from 'FileAPI'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'

// - Create Limg component class
export class Limg extends Component {

// Constructor
constructor(props){
  super(props)

  // Default state
  this.state = {
    url: ''
  }

  // Binding functions to `this`
  this.setImageURL = this.setImageURL.bind(this)
  this.handleClick = this.handleClick.bind(this)

FileAPI.downloadFile('images',this.props.src,this.setImageURL)
}

// Set image url via server
setImageURL = (url) => {
this.setState({
  url: url
})

}

// Handle on image select
handleClick = () => {
  this.props.dispatch(imageGalleryActions.imageSelect(this.props.src,this.state.url))
  this.props.callBack()
}


// Render DOM
  render() {

    return(
      <li className="imageGallery__image-node" style={{backgroundImage: 'url(' + this.state.url + ')'}}>
          <div className="imageCover">
            <div className="coverContent">
              <Button circular color='green' onClick={this.handleClick} icon='add'/>
            </div>
          </div>
      </li>
    )
  }
}

export default connect()(Limg)
