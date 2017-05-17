// - Import firebase
import {storageRef} from 'app/firebase/'

// - Get file Extension
export const getExtension = (fileName) => {
  var re = /(?:\.([^.]+))?$/;
  return re.exec(fileName)[1];
}

// Converts image to canvas; returns new canvas element
export const convertImageToCanvas = (image) => {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 0, 0);

	return canvas;
}

// - Delete file from storage
export const deleteFile = (folderName,fileName,callBackSuccess,callBackError) => {

  // Create a reference to the file to delete
  var desertRef = storageRef.child(`${folderName}/${filename}`);

  // Delete the file
  desertRef.delete().then(function() {
    // File deleted successfully
    callBackSuccess()
    console.log('File has been deleted successfully');
  }).catch(function(error) {
    // Uh-oh, an error occurred!
    callBackError(error)
    console.log(error);
  });

}

// - Conver data URI to blob
export const dataURItoBlob = (dataURI) => {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type: mimeString});
}

// - Upload file
export const uploadFile = (file, folderName, fileName, progressCallBack, errorCallBack, completeCallBack) => {

  // Create a storage refrence
  var storegeFile = storageRef.child(folderName + '/' + fileName)

  // Upload file
  var task = storegeFile.put(file)

  // Upload storage bar
  task.on('state_changed', (snapshot) => {
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    progressCallBack(percentage)
    // Set uploader progress value

  }, (error) => {
    errorCallBack(error)
  }, (complete) => {
    completeCallBack(complete)
  })
}

export var downloadFile = (folderName, fileName,callBack) => {
  // Create a reference to the file we want to download
  var starsRef = storageRef.child(`${folderName}/${fileName}`);


  // Get the download URL
  starsRef.getDownloadURL().then((url) => {
    // Insert url into an <img> tag to "download"
    callBack(url)
  }).catch((error) => {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object_not_found':
        // File doesn't exist
        console.log('storage/object_not_found');
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        console.log('storage/unauthorized');
        break;

      case 'storage/canceled':
        // User canceled the upload
        console.log('storage/canceled');
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        console.log('storage/unknown');
        break;
    }
  });

}
