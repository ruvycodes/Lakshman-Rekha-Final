import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Initialize Firebase Storage
const storage = getStorage();

// Function to handle file upload and return download URL
export function uploadFile(file) {
  return new Promise((resolve, reject) => {
    // Create the file metadata
    const metadata = {
      contentType: file.type // Assuming 'file' is the selected file from the file input
    };

    // Upload file and metadata to the specified path
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Track upload progress if needed
      }, 
      (error) => {
        // Handle errors during upload
        console.error('Error occurred during upload:', error);
        reject(error); // Reject the promise with the error
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          resolve(downloadURL); // Resolve the promise with the download URL
        }).catch((error) => {
          console.error('Error getting download URL:', error);
          reject(error); // Reject the promise with the error
        });
      }
    );
  });
}

































// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// // Initialize Firebase Storage
// const storage = getStorage();

// // Function to handle file upload
// export function uploadFile(file) {
//   // Create the file metadata
//   const metadata = {
//     contentType: file.type // Assuming 'file' is the selected file from the file input
//   };

//   // Upload file and metadata to the specified path
//   const storageRef = ref(storage, 'images/' + file.name);
//   const uploadTask = uploadBytesResumable(storageRef, file, metadata);

//   // Listen for state changes, errors, and completion of the upload.
//   uploadTask.on('state_changed',
//     (snapshot) => {
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case 'paused':
//           console.log('Upload is paused');
//           break;
//         case 'running':
//           console.log('Upload is running');
//           break;
//       }
//     }, 
//     (error) => {
//       // Handle errors during upload
//       switch (error.code) {
//         case 'storage/unauthorized':
//           console.error('User does not have permission to access the object');
//           break;
//         case 'storage/canceled':
//           console.error('User canceled the upload');
//           break;
//         case 'storage/unknown':
//           console.error('Unknown error occurred:', error.message);
//           break;
//         default:
//           console.error('Error occurred during upload:', error);
//       }
//     }, 
//     () => {
//       // Upload completed successfully, now we can get the download URL
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log('File available at', downloadURL);
//       }).catch((error) => {
//         console.error('Error getting download URL:', error);
//       });
//     }
//   );
// }
