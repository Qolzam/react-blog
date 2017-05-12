// - Import image gallery action types
import * as types from 'actionTypes'

 
// - Progress change
export const progressChange = (percent, visible) => {
  return {
    type: types.PROGRESS_CHANGE,
    percent,
    visible
  }

}

// - Avatar
export const setAvatar = (avatar) =>{
  return{
    type: types.AVATAR,
    avatar
  }

}
