// - Import react components
import React, {Component} from 'react';
import {Button, Grid, Icon, Segment} from 'semantic-ui-react';
import AvatarEditor from 'react-avatar-editor';
import Faker from 'faker';

// - Create Image uploader component class
export default class ImageUploader extends Component {

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
  }
  onClickSave() {
    // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
    // drawn on another canvas, or added to the DOM.
    const canvas = this.editor.getImage()
    this.setState( {
      previewImage: canvas.toDataURL()
    })

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

  setEditorRef = (editor) => {
    this.editor = editor
  }
  handleChangeZoom = (e) => this.setState({ zoom: e.target.value })
  handleChangeRotate = (e) => this.setState({ rotate: e.target.value })
  render() {
    return (
      <Grid centered>

        <Grid.Row>
          <Segment color={this.props.boxTopColor || "green"}>
            <AvatarEditor ref={this.setEditorRef} image={this.state.image} width={parseInt(this.props.width) || 200}
              height={parseInt(this.props.height) || 200} border={parseInt(this.props.border) || 50} color={[255, 255, 255, 0.6]} // RGBA
              scale={parseFloat(this.state.zoom)} rotate={parseInt(this.state.rotate)}/>
              <Segment>
              <Icon name="zoom" circular color={this.props.iconColor || "teal"} inverted/><input type='range' min={1} max={10} step={0.15} value={this.state.zoom} onChange={this.handleChangeZoom} />
              </Segment>
              <Segment>
              <Icon name="refresh" circular color={this.props.iconColor || "teal"} inverted/><input type='range' min={0} max={360} value={this.state.rotate} onChange={this.handleChangeRotate} />
              </Segment>
          </Segment>

        </Grid.Row>

        <Grid.Row >

          <label htmlFor={this.state.fileTagId}>
            <Button inverted as="div" color="blue">
              Choose Photo</Button>
          </label>
          <Button inverted as="div" color="green" onClick={this.onClickSave}><Icon name="cloud upload"/>Upload</Button>
          <input type="file" ref="file_avatar" id={this.state.fileTagId} onChange={this.onChange}/>
          
        </Grid.Row>
      </Grid>
    );

  }

}
