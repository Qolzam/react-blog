// - Import image gallery action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    status: false,
    images: [],
    selectImage: '',
    selectURL: ''
}

// - Image gallery reducer
export var imageGalleryReducer = (state = defaultState, action ) => {

  switch (action.type) {
    case types.OPEN_IMAGE_GALLERY:
      return {
        ...state,
        status: action.status
      }
    case types.ADD_IMAGE_GALLERY:
      return{
        ...state,
        images: [...state.images, action.image]
      }
    case types.ADD_IMAGE_LIST_GALLERY:
      {
        return{
          ...state,
          images: [...action.images]
        }
      }
    case types.IMAGE_SELECT_GALLERY:
    return{
      ...state,
      selectImage: action.image,
      selectURL: action.URL
    }
    case types.CLEARS_SELECT_IMAGE_GALLERY:
    return{
      ...state,
      selectImage: '',
      selectURL: ''
    }
    case types.CLEAT_ALL_DATA_IMAGE_GALLERY:
    return defaultState
    default:
      return state;
  }
}
