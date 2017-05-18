// - Import react components
import React, {Component} from 'react'
import {
  Button,
  Grid,
  Icon,
  Segment,
  Modal,
  Image,
  Popup
} from 'semantic-ui-react'
import {connect} from 'react-redux'
import AvatarEditor from 'react-avatar-editor'
import Faker from 'faker'
import uuid from 'uuid'

// - Import actions
import * as imageUploaderActions from 'imageUploaderActions'
import * as fileActions from 'fileActions'
import * as globalActions from 'globalActions'
import * as imageGalleryActions from 'imageGalleryActions'

// - Import app API
import * as FileAPI from 'FileAPI'

// - Create Image uploader component class
export class ImageUploader extends Component {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      previewImage: null,
      zoom: 1,
      rotate: 0,
      fileTagId: Faker.random.word(),
      fileName: '',
      folderName: 'images',
      fileExtension: '',
      file:'',
      isEdited:false
    };


    // Binding functions to `this`
    this.onChange = this.onChange.bind(this);
    this.editor = this.setEditorRef.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.close = this.close.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleOpenEditor = this.handleOpenEditor.bind(this);
    this.handleCloseEditor = this.handleCloseEditor.bind(this);
    this.handleUploadServer = this.handleUploadServer.bind(this);
    this.handleOnloadImage = this.handleOnloadImage.bind(this);
  }

  // Handle on load event on image
  handleOnloadImage = (evt) => {

  }

  // Close image uploader
  close = () => {
    this.setState({
          image: null,
          previewImage: null,
          zoom: 1,
          rotate: 0,
          fileTagId: Faker.random.word(),
          fileName: '',
          folderName: 'images',
          fileExtension: '',
          file:'',
          isEdited:false});
    this.props.dispatch(imageUploaderActions.openImageUploader(false))
  }

  // Upload photo to server
  onClickSave() {
    // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
    // drawn on another canvas, or added to the DOM.
    const canvas = this.editor.getImage()

    //    $.ajax({
    //  type: "POST",
    //  url: "script.php",
    //  data: {
    //     imgBase64: dataURL
    //  }
    // }).done(function(o) {
    //  console.log('saved');
    // });

    // If you want the image resized to the canvas size (also a HTMLCanvasElement)
    const canvasScaled = this.editor.getImageScaledToCanvas()
    this.setState({image: canvas.toDataURL(),isEdited:true})
    this.handleCloseEditor();
  }

  onChange(evt) {

    this.setState({
      image: window.URL.createObjectURL(evt.target.files[0]),
      file: evt.target.files[0],
      fileName: evt.target.files[0].name,
      fileExtension: FileAPI.getExtension(evt.target.files[0].name)
    })
  }

  // Handle upload click
  handleUploadClick = (evt) => {
    this.refs.fileUpload.click()
  }

  componentWillReceiveProps = (nextProps) => {}

  setEditorRef = (editor) => {
    this.editor = editor
  }


  handleChangeZoom = (e) => this.setState({zoom: e.target.value})
  handleChangeRotate = (e) => this.setState({rotate: e.target.value})


  // Open image editor
  handleOpenEditor = (evt) => {
    this.props.dispatch(imageUploaderActions.openImageEditor(true))
  }


  // Close image editor
  handleCloseEditor = (evt) => {
    this.props.dispatch(imageUploaderActions.openImageEditor(false))
    this.setState({zoom: 1, rotate: 0})
  }
  componentWillUnmount(){

  }


  // Handle upload image to server
  handleUploadServer = (evt) => {

    var dispatch = this.props.dispatch
    if (this.state.image) {
      var fileName = (`${uuid()}.${this.state.fileExtension}`)
      var uploadFile = this.state.isEdited ? FileAPI.dataURItoBlob(this.state.image) : this.state.file
      FileAPI.uploadFile( uploadFile, this.state.folderName,fileName,
       percent => dispatch(globalActions.progressChange(percent,true)),
      (error) => dispatch(fileActions.uploadError(error)),
      (result) => {
        console.log(result);
        dispatch(imageGalleryActions.dbImageSave(fileName,'images'))
        dispatch(globalActions.progressChange(100,false))
        this.close()
      }
          )
    }
  }





  // Render DOM
  render() {

    // Image editor DOM
    const imageEditor = (
      <Segment.Group color={this.props.boxTopColor || "green"}>

        <AvatarEditor scale={parseFloat(this.state.zoom)} ref={this.setEditorRef} image={this.state.image} width={parseInt(this.props.width) || 200} height={parseInt(this.props.height) || 200} border={parseInt(this.props.border) || 20} color={[255, 255, 255, 0.6]} rotate={parseInt(this.state.rotate)}/>

        <Segment>
          <Icon name="zoom" circular color={this.props.iconColor || "teal"} inverted/><input type='range' min={1} max={10} step={0.15} value={this.state.zoom} onChange={this.handleChangeZoom}/>
        </Segment>
        <Segment>
          <Icon name="refresh" circular color={this.props.iconColor || "teal"} inverted/><input type='range' min={0} max={360} value={this.state.rotate} onChange={this.handleChangeRotate}/>
        </Segment>
        <Segment>

            <Popup
            trigger={<Button circular icon='save' as="div" color="green" onClick={this.onClickSave}/>}
            content='SAVE'
            position='left center'
            size='tiny'

            />
            <Popup
            trigger={<Button circular icon='cancel' as='div' onClick={this.handleCloseEditor}/>}
            content='CANCEL'
            position='right center'
            size='tiny'

            />


        </Segment>
      </Segment.Group>

    )

    // Image preview cover DOM
    const cover = (
      <div className="imageUploaderCover">
        <ul className="coverUploaderContent" style={{
          listStyleType: 'none'
        }}>
          <li>

              <Popup
              trigger={<Button circular icon='paint brush' as='div' onClick={this.handleOpenEditor} color="teal"/>}
              content='EDIT'
              position='right center'
              size='tiny'

              />
          </li>
          <li>

              <Popup
              trigger={<Button circular icon='photo' as='div' color='blue' onClick={this.handleUploadClick}/>}
              content='CHOOSE'
              position='right center'
              size='tiny'

              />
          </li>
          <li>

              <Popup
           trigger={<Button circular icon='upload' as="div" color="green" onClick={this.handleUploadServer}/>}
           content='UPLOAD'
           position='right center'
           size='tiny'

         />
          </li>
          <li>
            <Popup
         trigger={<Button circular icon='cancel' as='div' onClick={this.close}/>}
         content='CLOSE'
         position='right center'
         size='tiny'

       />


          </li>
        </ul>
      </div>
    )

    // - Upload Panel
    const uploadPanel = (
      <div>
        <Button as='div' color='blue' onClick={this.handleUploadClick}>CHOOSE PHOTO</Button>
        <Button as='div' onClick={this.close}>CANEL</Button>

      </div>
    )

    // Image preview DOM
    const imagePreview = (
      <Segment className="imageUploader__preview" color={this.props.boxTopColor || "green"}>
        <Image ref={this.handleImage} size="large" onLoad={this.handleOnloadImage} src={this.state.image}/> {this.state.image
          ? cover
          : uploadPanel}
      </Segment>
    )

    // Return main DOM
    return (
      <Modal basic size='small' dimmer={'inverted'} open={this.props.uploadImageStatus} onClose={this.close}>

        <Grid centered>

          <Grid.Row >

            {this.props.editStatus
              ? imageEditor
              : imagePreview}
            <input type="file" ref="fileUpload" id={this.state.fileTagId} onChange={this.onChange}/>

          </Grid.Row>

          <Grid.Row ></Grid.Row>
        </Grid>
      </Modal>
    );

  }

}

export default connect((state) => {
  return {uploadImageStatus: state.imageUploader.status, editStatus: state.imageUploader.editStatus, uploadComplete: state.file.result, uploadError: state.file.error}
})(ImageUploader)
