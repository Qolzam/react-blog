// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = {
  percent: '',
  visible: false,
  avatar: '',
  loadingStatus:true,
  loadingForce: true
}


// - Global reducer
export const globalReducer = (state = defaultState, action) => {

switch (action.type) {
  case types.PROGRESS_CHANGE:
  return{
    percent: action.percent,
    visible: action.visible
  }
  case types.AVATAR:
  return{
    avatar: action.avatar
  }
  case types.LOADING:
  return{
    loadingStatus: action.status,
    lodingForce: action.force
  }
    break;
  default:
  return state
}

}
