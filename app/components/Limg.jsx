// - Import react components
import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {connect} from 'react-redux'

// - Import app API
import * as FileAPI from 'FileAPI'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'
import * as fileActions from 'fileActions'

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
  this.handleClickAdd = this.handleClickAdd.bind(this)
  this.handleClickDelete = this.handleClickDelete.bind(this)

FileAPI.downloadFile('images',this.props.src,this.setImageURL)
}

// Set image url via server
setImageURL = (url) => {
this.setState({
  url: url
})

}

// Handle on image select
handleClickAdd = (evt,index) => {

  this.props.select(this.props.src,this.state.url)
  this.props.callBack()
}

// Handle click to delete an image
handleClickDelete = (evt,id) => {
  console.log('Image clicked for delete by id : ',id);
  this.props.delete(id)
}
componentWillUnmount(){
  console.log('Limg unmount')
}
// Render DOM
  render() {

    return(
      <li className="imageGallery__image-node" style={{backgroundImage: 'url(' + this.state.url + ')'}}>
          <div className="imageCover">
            <div className="coverContent">
              <Button circular color='green' onClick={(evt) => {this.handleClickAdd(evt,this.props.id)}} icon='add'/>
              <p></p>
              <Button circular color='red' onClick={(evt) => {this.handleClickDelete(evt,this.props.id)}} icon='trash'/>
            </div>
          </div>
      </li>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return{
    delete: (id) => {
      dispatch(imageGalleryActions.dbDeleteImage(id))
    },
    select: (name,URL) => {
      dispatch(imageGalleryActions.imageSelect(name,URL))
    }
  }
}

// - Map state to props
const mapStateToProps = (state) => {
  return{
    images: state.imageGallery.images
  }
}

// - Connect app to the redux store
export default connect(mapStateToProps,mapDispatchToProps)(Limg)
