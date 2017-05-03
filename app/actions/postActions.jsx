// - Import post action types
import * as types from 'actionTypes'

// - Post actions
export const openPostWritePage = (writeStatus) => {
  return{
    type: types.OPEN_POST_WRITE_PAGE,
    writeStatus
  }
}

export const onHoldPostWrite = (onHoldWriteStatus) {
  return{
    type: types.ON_HOLD_POST_WRITE,
    onHoldWriteStatus
  }
}
