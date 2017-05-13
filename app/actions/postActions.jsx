// - Import firebase component
import firebase, {firebaseRef} from 'app/firebase/'

// - Import utility components
import moment from 'moment'

// - Import action types
import * as types from 'actionTypes'

// - Import actions
import * as postWritingActions from 'postWritingActions'



// - Post actions

export const addImagePost = (post) => {
  return{
    type: types.ADD_IMAGE_POST,
    post
  }

}

export var dbAddImagePost = () => {
  return (dispatch, getState) => {

  }
}

export const addVideoPost = (post) => {
  return{
    type: types.ADD_VIDEO_POST,
    post
  }
}

// Add normal post
  export const addPost = (post) => {
    return{
      type: types.ADD_POST,
      post
    }
}
 export const dbAddPost = (newPost) => {
   return(dispatch,getState) => {

     var uid = getState().authorize.uid
     var post = {
            postTypeId: 1,
            creationDate: moment().unix(),
            deletationDate: '',
            score: 0,
            viewCount: 0,
            body: newPost.body,
            ownerUserId: uid,
            ownerDisplayName: 'state.post.ownerDisplayName',
            lastEditDate: '',
            tags: newPost.tags || [],
            commentCounter: 0,
            image:newPost.image,
            video:'',
            deleted:false
          }


     var postRef = firebaseRef.child(`users/${uid}/posts`).push(post)
     return postRef.then(()=>{
       dispatch(postWritingActions.openPostWritePage(false))
       dispatch(addPost({
         ...post,
         id: postRef.key
       }))
     })
   }

 }
