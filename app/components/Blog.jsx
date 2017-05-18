// - Import react components
import React, {Component} from 'react'
import {Grid, Image, Segment, Message} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'


// - Import app components
import Summary from 'Summary'
import Post from 'Post'
import PopularPosts from 'PopularPosts'
import Tags from 'Tags'
import PostWrite from 'PostWrite'

// - Import API
import * as AuthAPI from 'AuthAPI'



// - Create Blog component class
export class Blog extends Component {

  // - Constructor
  constructor(props){
    super(props)

    // Binding functions to `this`
    this.postList = this.postList.bind(this)
  }

  postList = () => {
    var {posts} = this.props

    if (!(posts.length>0)) {
        return (
          <Grid.Column>
          <Message
                  icon='inbox'
                  content='Nothing has shared.'
                />
            </Grid.Column>
            )
    }
    else{
          return posts.map((post,index)=>{

            return(
              <Grid.Column key={index}>
              <Post body={post.body}
                    commentCounter = { post.commentCounter}
                    creationDate = {post.creationDate}
                    key={post.id}
                    id={post.id}
                    image = {post.image}
                    lastEditDate = {post.lastEditDate}
                    ownerDisplayName = {post.ownerDisplayName}
                    ownerUserId = {post.ownerUserId}
                    ownerAvatar={post.ownerAvatar}
                    postTypeId = {post.postTypeId}
                    score = {post.score}
                    tags = {post.tags}
                    video = {post.video}
                    viewCount = {post.viewCount}
                pictureState={true}/>
              </Grid.Column>
            )
      })
    }


  }

  // Render DOM
  render() {
    return (
      <Grid stackable divided padded columns={2}>
        <Grid.Row>
          <Grid.Column computer={12} mobile={16} tablet={11}>
            {AuthAPI.isAuthorized() ? <PostWrite/> : '' }

             <Grid doubling columns={2}>
               {this.postList()}
            </Grid>
          </Grid.Column>
          <Grid.Column computer={4} mobile={16} tablet={5}>
            <Summary/>
            <PopularPosts/>
            <Tags/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
}

export default withRouter(connect(
  (state) => {
    return{
      posts: state.post

    }

})(Blog))
