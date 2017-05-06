// - Import firebase component
import firebase, {firebaseRef} from 'app/firebase/'

// - Import utility components
import moment from 'moment'

// - Import action types
import * as types from 'actionTypes'



// - post actions

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

  export const addPost = (post) => {
    return{
      type: types.ADD_POST,
      post
    }

}
