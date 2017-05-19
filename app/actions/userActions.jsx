// - Import react components
import {firebaseRef} from 'app/firebase/'

// - Import action types
import * as types from 'actionTypes'


// - User info
export const userInfo = (info) => {
  return{
    type: types.USER_INFO,
    info
  }
}

/* _____________ CRUD DB _____________ */

// - Set user avatar to database
export const dbSetAvatar = (url) => {
  return (dispatch,getState) => {

          // Get current user id
          var uid = getState().authorize.uid

          // Write the new data simultaneously in the list
            var updates = {};
            updates[`users/${uid}/info/avatar`] = url;

          return firebaseRef.update(updates).then((result) => {
            dispatch(setUserAvatar(url))
          },(error) => {
            console.log(error);
          });
  }
}

// - Get user info from database
export const dbGetUserInfo = () => {
  return (dispatch, getState) => {
    var uid = getState().authorize.uid
    if (uid) {
      var userInfoRef = firebaseRef.child(`users/${uid}/info`);

      return userInfoRef.once('value').then((snapshot) => {
        var userInfo = snapshot.val() || {};
        dispatch(addUserInfo(userInfo))
      },error => console.log(error));

    }
  }
}

// - Updata user information
export const dbUpdateUserInfo = (info) => {
    return (dispatch,getState) => {

            // Get current user id
            var uid = getState().authorize.uid

            return firebaseRef.child(`users/${uid}/info`).set({
              ...getState().user,
              ...info
            }).then((result) => {
              dispatch(addUserInfo(info))
            },(error) => {
              console.log(error);
            });
    }

}

/* _____________ CRUD State _____________ */

// - Set user avatar
export const setUserAvatar = (url) => {
  return{
    type: types.ADD_USER_AVATAR,
    url
  }
}

// - Add user information
export const addUserInfo = (info) => {
  return{
    type: types.ADD_USER_INFO,
    info
  }
}
