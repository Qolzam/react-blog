// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = {
  percent: '',
  visible: false,
  loadingStatus:true,
  defaultLoadDataStatus:false
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
  default:
  return state
}

}
