// - Import react componetns
import moment from 'moment'
import {firebaseRef, firebaseAuth} from 'app/firebase/'

// - Import image gallery action types
import * as types from 'actionTypes'

// - Import app API
import * as FileAPI from 'FileAPI'

/* _____________ UI Actions _____________ */


// - To set image gallery open/close
export const openImageGallery = (status) => {
  return {type: types.OPEN_IMAGE_GALLERY, status}
}




// - Select image
export const imageSelect = (image, URL) => {
  return {type: types.IMAGE_SELECT_GALLERY, image, URL}

}

// - Clear selected data
export const clearSelectData = () => {
  return {type: types.CLEARS_SELECT_IMAGE_GALLERY}

}

// - Clear all data in image gallery store
export const clearAllData = () => {
  return{
    type: types.CLEAT_ALL_DATA_IMAGE_GALLERY
  }
}

// - Download image for image gallery
export const downloadForImageGallery = () => {
  return (dispatch, getState) => {
    var uid = getState().authorize.uid
    console.log('user id : ', uid);
    if (uid) {
      var imagesRef = firebaseRef.child(`userFiles/${uid}/files/images`);

      return imagesRef.once('value').then((snapshot) => {
        var images = snapshot.val() || {};
        var parsedImages = [];
        Object.keys(images).forEach((imageId) => {
          parsedImages.push({
            id: imageId,
            ...images[imageId]
          });
        });
        console.log('ParsedImages : ', parsedImages);
        dispatch(addImageList(parsedImages));
      });

    }
  }

}

/* _____________ CRUD Database_____________ */

// -  Save image in DB
export const dbImageSave = (imageName) =>
{
  return (dispatch,getState) => {

    var uid = getState().authorize.uid
    var image = {
           creationDate: moment().unix(),
           deletationDate: '',
           name: imageName,
           ownerUserId: uid,
           lastEditDate: '',
           deleted:false
         }

    var imageRef = firebaseRef.child(`userFiles/${uid}/files/images`).push(image)
    return imageRef.then(()=>{
      dispatch(addImage({
        ...image,
        id: imageRef.key
      }))
    })

  }
}

// - Delete an image from db
export const dbDeleteImage = (id) => {
  return (dispatch,getState) => {

      // Get current user id
      var uid = getState().authorize.uid

      // Write the new data simultaneously in the list
        var updates = {};
        updates[`userFiles/${uid}/files/images/${id}`] = null;

      return firebaseRef.update(updates).then((result) => {
        dispatch(deleteImage(id))
        console.log('image removed: ' , id);
      },(error) => {
        console.log(error);
      });
  }

}


/* _____________ CRUD State _____________ */

// - Add image list to image gallery
export const addImageList = (images) => {
  return {type: types.ADD_IMAGE_LIST_GALLERY, images}
}

// - Add image to image gallery
export const addImage = (image) => {
  return {type: types.ADD_IMAGE_GALLERY, image}
}

// - Delete an image
export const deleteImage = (id) => {
  return {type: types.DELETE_IMAGE, id}

}
