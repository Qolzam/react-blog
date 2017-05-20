// - Import react components
import {firebaseRef, firebaseAuth} from 'app/firebase/'
import moment from 'moment'
import {push} from 'react-router-redux'

// - Import action types
import * as types from 'actionTypes'

// - Import actions
import * as globalActions from 'globalActions'

/* _____________ CRUD DB _____________ */

// - Log in user in server
export var dbLogin = (email, password) => {
  return (dispatch, getState) => {
    dispatch(globalActions.showNotificationRequest())

    return firebaseAuth().signInWithEmailAndPassword(email, password).then((result) => {
    dispatch(globalActions.showNotificationSuccess())
      dispatch(login(result.uid))
      dispatch(push('/'))
    }, (error) => {
      dispatch(globalActions.showNotificationError(error.message))
    })
  }
}

// - Log out user in server
export var dbLogout = () => {
  return (dispatch, getState) => {
    return firebaseAuth().signOut().then((result) => {
      dispatch(logout())
      dispatch(push('/login'))

    }, (error) => {
      dispatch(globalActions.showNotificationError(error.message))

    })
  }

}

// - Register user in database
export var dbSignup = (user) => {
  return (dispatch, getState) => {
    dispatch(globalActions.showNotificationRequest())
    return firebaseAuth().createUserWithEmailAndPassword(user.email, user.password).then((signupResult) => {
      firebaseRef.child(`users/${signupResult.uid}/info`).set({
        ...user
      }).then((result) => {

        dispatch(globalActions.showNotificationSuccess())

      }, (error) => {
        dispatch(globalActions.showNotificationError(error.message))
      })

      dispatch(signup({
        uid: signupResult.uid,
        ...user
      }))
    }, (error) => {
      console.log(error)
    })
  }

}

// - Change user's password
export const dbUpdatePassword = (newPassword) => {
  return (dispatch, getState) => {
    dispatch(globalActions.showNotificationRequest())
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {

        user.updatePassword(newPassword).then(() => {
          // Update successful.
          dispatch(globalActions.showNotificationSuccess())
          dispatch(updatePassword())
        }, (error) => {
          // An error happened.
          switch (error.code) {
            case 'auth/requires-recent-login':
                dispatch(globalActions.showNotificationError(error.message))
                dispatch(authorizeActions.dbLogout())
              break;
            default:

          }
        })
      }

    })
  }
}

/* _____________ CRUD State _____________ */

// - Loing user
export var login = (uid) => {
  return {type: 'LOGIN', authed: true, uid}
}

// - Logout user
export var logout = () => {
  return {type: types.LOGOUT, authed: false, uid: 0}
}

// - Register user
export var signup = (user) => {
  return {
    type: types.SIGNUP,
    ...user
  }

}

// - Update user's password
export const updatePassword = () => {
  return {type: types.UPDATE_PASSWORD}
}
