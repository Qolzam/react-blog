// - Import image gallery action types
import * as types from 'actionTypes'

// - Import actions
import * as postActions from 'postActions'
import * as commentActions from 'commentActions'
import * as userActions from 'userActions'

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

// - Load data for guest
export const loadDataGuest = () => {
  return (dispatch,getState) => {
  var userString = "{\"avatar\":\"http://www.freeimageslive.com/galleries/nature/abstract/preview/frostyleaves00406.jpg\",\"contact\":\"amir.gholzam@live.com\",\"email\":\"amir.gholzam@live.com\",\"fullName\":\"React Social Blog\",\"password\":\"123qwe\",\"summary\":\" The React Social Blog (RSB) Application is a diary app blog\"}"
  var postString = '[{"id":"-KkauHBOZXlALsHIrNsvsq","body":"The React Social Blog (RSB) Application is a diary app blog based on Semantic ui React for UI, Redux with react-redux for managing states and React for managing DOM .It is an open source project as a portfolio.\\n\\nI will be really grateful to receive any issue: \\nhttps://github.com/Qolzam/react-blog/issues\\n\\n \\n","commentCounter":0,"creationDate":1495301432,"deletationDate":"","deleted":false,"image":"http://www.freeimageslive.com/galleries/nature/abstract/preview/frosty_grass.jpg","lastEditDate":"","ownerAvatar":"http://www.freeimageslive.com/galleries/nature/abstract/preview/frostyleaves00406.jpg","ownerDisplayName":"React Social Blog","ownerUserId":"5flWuB1RieZR7GIAwHYMPYaI5o33","postTypeId":1,"score":0,"video":"","viewCount":0},{"id":"-KkauHBOZXlALsHIrNIq","body":"It is a demo website","commentCounter":0,"creationDate":1495301432,"deletationDate":"","deleted":false,"image":"http://www.freeimageslive.com/galleries/nature/environment/pics/eaten%20_flower0905.jpg","lastEditDate":"","ownerAvatar":"http://www.freeimageslive.com/galleries/nature/abstract/preview/frostyleaves00406.jpg","ownerDisplayName":"React Social Blog","ownerUserId":"5flWuB1RieZR7GIAwHYMPYaI5o33","postTypeId":1,"score":0,"video":"","viewCount":0},{"id":"-KkauHBOZXlsLsHIrNIq","body":"This is an open source project","commentCounter":0,"creationDate":1495301432,"deletationDate":"","deleted":false,"image":"http://www.freeimageslive.com/galleries/nature/environment/pics/eaten%20_flower0905.jpg","lastEditDate":"","ownerAvatar":"http://www.freeimageslive.com/galleries/nature/abstract/preview/frostyleaves00406.jpg","ownerDisplayName":"React Social Blog","ownerUserId":"5flWuB1RieZR7GIAwHYMPYaI5o33","postTypeId":1,"score":0,"video":"","viewCount":0},{"id":"-KkaurBOZXlALsHIrNIq","body":"I have documentaion, testing, add some features DEBUG in my todo list","commentCounter":0,"creationDate":1495301432,"deletationDate":"","deleted":false,"image":"http://www.freeimageslive.com/galleries/nature/environment/pics/eaten%20_flower0905.jpg","lastEditDate":"","ownerAvatar":"http://www.freeimageslive.com/galleries/nature/abstract/preview/frostyleaves00406.jpg","ownerDisplayName":"React Social Blog","ownerUserId":"5flWuB1RieZR7GIAwHYMPYaI5o33","postTypeId":1,"score":0,"video":"","viewCount":0}]'
  var postCommentString = "{\"postComments\":{\"-KkauHBOZXlALsHIrNIq\":{\"-KkaxkH1WmfcQaiNHK3R\":{\"creationDate\":1495302341,\"postId\":\"-KkauHBOZXlALsHIrNIq\",\"score\":0,\"text\":\"On developing :)\",\"userAvatar\":\"http://www.freeimageslive.com/galleries/nature/abstract/preview/frostyleaves00406.jpg\",\"userDisplayName\":\"React Social Blog\",\"userId\":\"5flWuB1RieZR7GIAwHYMPYaI5o33\"}}}}"
  var user = JSON.parse(userString)
  dispatch(userActions.addUserInfo(user))
  var post = JSON.parse(postString)
  dispatch(postActions.addPosts(post))
  var postComment = JSON.parse(postCommentString)
  dispatch(commentActions.addCommentList(postComment.postComments))
  }
}
