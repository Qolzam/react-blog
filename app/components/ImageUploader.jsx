// - Import react components
import React, {Component} from 'react'
import {
  Button,
  Grid,
  Icon,
  Segment,
  Modal,
  Image
} from 'semantic-ui-react'
import {connect} from 'react-redux'
import AvatarEditor from 'react-avatar-editor'
import Faker from 'faker'

// - Import actions
import * as imageUploaderActions from 'imageUploaderActions'


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
      fileTagId: Faker.random.word()
    };
    this.onChange = this.onChange.bind(this);
    this.editor = this.setEditorRef.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.close = this.close.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
  }

  close = () => {
    this.setState({
      image: null,
      previewImage: null
    });
    this.props.dispatch(imageUploaderActions.openImageUploader(false))
  }

  // Upload photo to server
  onClickSave() {
    // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
    // drawn on another canvas, or added to the DOM.
    const canvas = this.editor.getImage()
    this.setState({previewImage: canvas.toDataURL()})

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

  }

  onChange(evt) {
    this.setState({
      image: window.URL.createObjectURL(evt.target.files[0])
    })
  }

  // Handle upload click
  handleUpload = (evt) => {
    this.refs.fileUpload.click()
  }

  componentWillReceiveProps = (nextProps) => {}

  setEditorRef = (editor) => {
    this.editor = editor
  }
  handleChangeZoom = (e) => this.setState({zoom: e.target.value})
  handleChangeRotate = (e) => this.setState({rotate: e.target.value})

  // Open image editor
  handleEditor = (evt) => {
    this.props.dispatch(imageUploaderActions.openImageEditor(true))
  }

  // Render DOM
  render() {

    // Image editor DOM
    const imageEditor = (
      <Segment color={this.props.boxTopColor || "green"}>

        <AvatarEditor ref={this.setEditorRef}
           image={this.state.image}
           width={parseInt(this.props.width) || 200}
           height={parseInt(this.props.height) || 200}
           border={parseInt(this.props.border) || 50}
           color={[255, 255, 255, 0.6]}
          rotate={parseInt(this.state.rotate)}scale={parseFloat(this.state.zoom)}
          />

        <Segment>
          <Icon name="zoom" circular color={this.props.iconColor || "teal"} inverted/><input type='range' min={1} max={10} step={0.15} value={this.state.zoom} onChange={this.handleChangeZoom}/>
        </Segment>
        <Segment>
          <Icon name="refresh" circular color={this.props.iconColor || "teal"} inverted/><input type='range' min={0} max={360} value={this.state.rotate} onChange={this.handleChangeRotate}/>
        </Segment>
      </Segment>

    )

    // Image preview cover DOM
    const cover = (
      <div className="imageUploaderCover">
        <ul style={{listStyleType: 'none'}}>
          <li>
            <Button fluid as='div' onClick={this.handleEditor} className="coverContent" color="green">EDIT</Button>

          </li>
          <li>
            <Button fluid as='div' color='blue' onClick={this.handleUpload}>CHOOSE PHOTO</Button>

          </li>
          <li>
            <Button fluid className="coverContent" inverted as="div" color="green" onClick={this.onClickSave}><Icon name="cloud upload"/>UPLOAD</Button>

          </li>
          <li>
            <Button fluid as='div' inverted onClick={this.close}>CANEL</Button>

          </li>
        </ul>
      </div>
    )

    // - Upload Panel
    const uploadPanel = (
      <div>
        <Button as='div' color='blue' onClick={this.handleUpload}>CHOOSE PHOTO</Button>
        <Button as='div' onClick={this.close}>CANEL</Button>

      </div>
    )

    // Image preview DOM
    const imagePreview = (
      <Segment className="imageUploader__preview" color={this.props.boxTopColor || "green"}>
        <Image size="large" src={this.state.image}/> {this.state.image
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
  return {uploadImageStatus: state.imageUploader.status, editStatus: state.imageUploader.editStatus}
})(ImageUploader);
