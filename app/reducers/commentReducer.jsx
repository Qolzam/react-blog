// - Import react components
import moment from 'moment'
import _ from 'lodash'



// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = {
  postComments:{}
}


// - Comment actions
export var commentReducer = (state = defaultState, action ) =>{
  switch (action.type) {

    /* _____________ CRUD _____________ */
    case types.ADD_COMMENT:
    return{
      ...state,
      postComments:{
        ...state.postComments,
        [action.parentId]: {...state.postComments[action.parentId],
          [action.id]: action.data}
      }
    }
    case types.ADD_COMMENT_LIST:
    return{
      ...state,
      postComments: {
        ...state.postComments,
        ...action.postComments
      }
    }
    case types.CLEAR_ALL_DATA_COMMENT:
    return defaultState

      break;
    default:
    return state;

  }


}
