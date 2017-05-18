// - Import react components
import moment from 'moment'
import {firebaseRef} from 'app/firebase/'

// - Import action types
import * as types from 'actionTypes'


/* _____________ CRUD DB _____________ */

// - Add comment to database
export const dbAddComment = (newComment,callBack) => {
  return (dispatch,getState) => {

    var uid = getState().authorize.uid
    var comment = {
            postId: newComment.postId,
            score:0,
            text: newComment.text,
            creationDate: moment().unix(),
            userDisplayName: getState().user.info.name,
            userAvatar: getState().global.avatar,
            userId: uid
         }

    var commentRef = firebaseRef.child(`postComments/${newComment.postId}`).push(comment)
    return commentRef.then(()=>{
      dispatch(addComment(
        comment,
        comment.postId,
        commentRef.key
      ))
      callBack()

    },(error) => console.log(error))

  }
}

// - Get all comments from database
export const dbGetComments = () => {
  return (dispatch, getState) => {
    var uid = getState().authorize.uid
    if (uid) {
      var commentsRef = firebaseRef.child(`postComments`);

      return commentsRef.once('value').then((snapshot) => {
        var comments = snapshot.val() || {};
        dispatch(addCommentList(comments))
      },error => console.log(error));

    }
  }
}

/* _____________ CRUD State _____________ */

// - Add comment
export const addComment = (data,parentId,id) => {

  return{
    type: types.ADD_COMMENT,
    data,
    parentId,
    id
  }
}

// - Add comment list
export const addCommentList = (postComments) => {

  return{
    type: types.ADD_COMMENT_LIST,
    postComments
  }
}
