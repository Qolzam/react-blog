// - Import react components
import moment from 'moment'

// - Import image gallery action types
import * as types from 'actionTypes'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'

// - Import firebase
import {storageRef,firebaseRef} from 'app/firebase/'


// - Upload file start
export const uploadFile = (file) => {
  return (dispatch,getState) => {
    switch (file.type) {
      case 'images':
        dispatch(imageGalleryActions.addImage(file))
        break;
      default:

    }

  }

}

// -  Save file info in DB
export const dbFileSave = (fileName,fileType) =>
{
  return (dispatch,getState) => {

    var uid = getState().authorize.uid
    var file = {
           creationDate: moment().unix(),
           deletationDate: '',
           name: fileName,
           ownerUserId: uid,
           type: fileType,
           lastEditDate: '',
           deleted:false
         }


    var fileRef = firebaseRef.child(`user-files/${uid}/files/${fileType}`).push(file)
    return fileRef.then(()=>{
      dispatch(uploadFile({
        ...file,
        id: fileRef.key
      }))
    })

  }
}

// - Delete a file from db
export const dbFileDelete = (fileKey,fileType) => {
  return (dispatch,getState) => {

      // Get current user id
      var uid = getState().authorize.uid

      // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[`user-files/${uid}/files/${fileType}/${fileKey}`] = null;

      return firebase.database().ref().update(updates).then((result) => {
        console.log('file removed');
      },(error) => {
        console.log(error);
      });
  }

}


// - Upload file error
export const uploadError = (error) => {
  return{
    type: types.UPLOAD_FILE_ERROR,
    error
  }
}

// - Uplaod file complete
export const uploadComplete = (result) => {
  return{
    type: types.UPLOAD_FILE_COMPLETE,
    result
  }

}




// - Download file
export const downloadFile = (fileName) => {
  return {
    type: types.DOWNLOAD_FILE,
    fileName
  }
}
