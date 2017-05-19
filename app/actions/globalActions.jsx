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
