// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = {
  uid: 0,
  authed: false,
  updatePassword: false
}


// - Authorize reducer

export var authorizeReducer = (state = defaultState, action) =>{
  switch (action.type) {
    case types.LOGIN:
      return{
        uid: action.uid,
        authed: true
      }
    case types.LOGOUT:
    return{
      uid: 0,
      authed: false
    }

    case types.SIGNUP:
      return{
        uid: action.uid
      }
    case types.UPDATE_PASSWORD:
    return{
      ...state,
      updatePassword: action.updatePassword
    }
    default:
      return state

  }

}
