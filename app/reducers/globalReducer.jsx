// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = {
  percent: '',
  visible: false,
  loadingStatus:true,
  defaultLoadDataStatus:false,
  messageHidden: true,
  message: '',
  messageColor: ''
}


// - Global reducer
export const globalReducer = (state = defaultState, action) => {

switch (action.type) {
  case types.PROGRESS_CHANGE:
  return{
    ...state,
    percent: action.percent,
    visible: action.visible
  }
  case types.DEFAULT_DATA_DISABLE:
  return{
    ...state,
    defaultLoadDataStatus:false
  }
  case types.DEFAULT_DATA_ENABLE:
  return{
    ...state,
    defaultLoadDataStatus:true
  }
  case types.SHOW_ERROR_MESSAGE_GLOBAL:
  return{
    ...state,
    message: action.message,
    messageHidden: false,
    messageColor: 'red'
  }
  case types.SHOW_NORMAL_MESSAGE_GLOBAL:
  return{
    ...state,
    message: action.message,
    messageHidden: false,
    messageColor: 'teal'
  }
  case types.SHOW_SEND_REQUEST_MESSAGE_GLOBAL:
  return{
    ...state,
    message: "Request has been sent",
    messageHidden: false,
    messageColor: 'blue'
  }
  case types.SHOW_REQUEST_SUCCESS_MESSAGE_GLOBAL:
  return{
    ...state,
    message: "Your request has processed successfuly",
    messageHidden: false,
    messageColor: 'green'
  }
  case types.HIDE_MESSAGE_GLOBAL:
  return{
    ...state,
    message: '',
    messageHidden: true,
    messageColor:''
  }
  default:
  return state
}

}
