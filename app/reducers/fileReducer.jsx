
// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = {
  downloadFileName: '',
  uploadFileName:'',
  error: {},
  result: {}
}

// - File reducer
export const fileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPLOAD_FILE:
      return{
        ...state,
        uploadFileName: action.fileName
      }
    case types.UPLOAD_FILE_ERROR:
    return{
      state,
      error: action.error
    }
    case types.UPLOAD_FILE_COMPLETE:
    return{
      ...state,
      result: action.result
    }
    case types.DOWNLOAD_FILE:
    return{
      ...state,
      downloadFileName: action.fileName
    }

    default:
    return state
  }
}
