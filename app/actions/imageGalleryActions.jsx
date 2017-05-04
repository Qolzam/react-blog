// Import image gallery action types
import * as types from 'actionTypes'


// - Image gallery actions

export const openImageGallery = (status) => {
  return{
    type: types.OPEN_IMAGE_GALLERY,
    status
  }
}
