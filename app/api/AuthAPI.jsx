// - Import firebase components
import {firebaseAuth, firebaseRef} from 'app/firebase/'

// - Check user if is authorized
export var isAuthorized = () => {

  var user = firebaseAuth().currentUser;
  return user ? true : false
}

// - Logout user
export var logout = (callBack) => {

  return firebaseAuth().signOut().then((result)=>{
    console.log('user sined out : ',result)
    return callBack()
  },(error) => {
    console.log(error)

  })
}

export var isAdmin = () =>{

return false;

}
