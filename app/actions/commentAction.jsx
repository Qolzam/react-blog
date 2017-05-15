// - Import action types
import * as types from 'actionTypes'


// - Add comment
export const addComment = (comment) => {
  return{
    type: types.ADD_POST,
    comment

  }
}

// - Add comment to database
export const dbAddComment = (newComment,callBack) => {
  return (dispatch,getState) => {

    var uid = getState().authorize.uid
    var comment = {
            postId: newComment.postId,
            score:0,
            text: newComment.text,
            creationDate: moment.unix(),
            userDisplayName: newComment.userDisplayName,
            userAvatar: newComment.avatar
            userId: newComment.userId
         }


    var commentRef = firebaseRef.child(`posts/${postId}/comments/pushId`).push(post)
    return commentRef.then(()=>{
      dispatch(addPost({
        ...post,
        id: postRef.key
      }))
      callBack()
    })



  }

}
