// - Import action types
import * as types from 'actionTypes'



// - post actions

export const addImagePost = (post) => {
  return{
    type: types.ADD_IMAGE_POST,
    post
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
