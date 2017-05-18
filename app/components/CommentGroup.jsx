// - Import react components
import React, {Component} from 'react'
import {Button, Comment, Form, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'


// - Import app components
import PostComment from 'PostComment'
import CommentWrite from 'CommentWrite'

// - Create CommentGroup component class
export class CommentGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentWriteShow: false,
      commentText: ""

    }

    // Binding functions to `this`
    this.onCommentChange = this.onCommentChange.bind(this);
    this.closeWriteComment = this.closeWriteComment.bind(this);
    this.commentList = this.commentList.bind(this)

  }

// Get comment's in DOM
  commentList = () => {
    var comments = this.props.comments
    var parsedComments = [];
    Object.keys(comments).forEach((commentId) => {
      parsedComments.push({
        id: commentId,
        ...comments[commentId]
      });
    });
    return  parsedComments.map(comment => {
      return <PostComment key={comment.id}
        creationDate={comment.creationDate}
        avatarSrc={comment.userAvatar}
        author={comment.userDisplayName}
        text={comment.text}/>

    })


  }

  onCommentChange(evt, data) {
    var text = data.value;

    this.setState({commentWriteShow: true, commentText: text});

    data.value = "";

  }
  closeWriteComment = () => {
    this.setState({
      commentWriteShow: false
    });
  }

// Render DOM
  render() {
    return (
      <Comment.Group size="mini" minimal className={this.props.className}>

        {this.commentList()}

        <Form reply onSubmit={e => e.preventDefault()}>

          {!this.state.commentWriteShow
            ? <Input fluid onChange={this.onCommentChange} icon={{
                name: 'comment',
                circular: true,
                link: true
              }} placeholder='Comment...'/>
            : <CommentWrite commentText={this.state.commentText} postId={this.props.postId} close={this.closeWriteComment}/>

          }
        </Form>
      </Comment.Group>

    );
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return{

  }
}

// - Map state to props
const mapStateToProps = (state,ownProps) => {
  return{
    comments: state.comment.postComments[ownProps.postId]
  }
}

// - Connect component to redux store
export default connect(mapStateToProps,mapDispatchToProps)(CommentGroup)
