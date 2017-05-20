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

// - Default data loaded status will be true
export const defaultDataEnable = (status) => {
  return{
    type: types.DEFAULT_DATA_ENABLE
  }
}

// - Default data loaded status will be false
export const defaultDataDisable = (status) => {
  return{
    type: types.DEFAULT_DATA_DISABLE
  }
}

// - Show notification of error
export const showNotificationError = (message) =>  {
  return (dispatch,getState) => {
      dispatch(showErrorMessage(message))
    setTimeout(() => {
          dispatch(hideMessage())
    }, 5000)
  }
}


// - Show global error message
export const showErrorMessage = (message) => {
  return{
    type: types.SHOW_ERROR_MESSAGE_GLOBAL,
    message
  }

}

// - Show notification normally
export const showNotificationNormal = (message) =>  {
  return (dispatch,getState) => {
      dispatch(showNormalMessage(message))
    setTimeout(() => {
          dispatch(hideMessage())
    }, 5000)
  }
}


// - Show global normal message
export const showNormalMessage = (message) => {
  return{
    type: types.SHOW_NORMAL_MESSAGE_GLOBAL,
    message
  }

}

// - Show notification of request
export const showNotificationRequest = () =>  {
  return (dispatch,getState) => {
      dispatch(showSendRequestMessage())
    setTimeout(() => {
          dispatch(hideMessage())
    }, 5000)
  }
}


// - Show global request sent message
export const showSendRequestMessage = () => {
  return{
    type: types.SHOW_SEND_REQUEST_MESSAGE_GLOBAL
  }

}

// - Show notification of success
export const showNotificationSuccess = () =>  {
  return (dispatch,getState) => {
      dispatch(showRequestSuccessMessage())
    setTimeout(() => {
          dispatch(hideMessage())
    }, 5000)
  }
}

// - Show global request successful message
export const showRequestSuccessMessage = () => {
  return{
    type: types.SHOW_REQUEST_SUCCESS_MESSAGE_GLOBAL
  }

}

// - Hide global message
export const hideMessage = () => {
  return{
    type: types.HIDE_MESSAGE_GLOBAL
  }

}
