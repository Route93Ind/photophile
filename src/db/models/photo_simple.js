// const knex = require("../knex");

class Photo {
   static #all = [];
  
  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
  constructor({ id, url, caption}) {
    this.id = id;
    this.url = url;
    this.caption = caption;
  }

  static postPhoto(id, url, caption){
    const newPhoto = new Photo({id, url, caption});
    Photo.#all.push(newPhoto);
  }
  
  static findPhoto(photoId){
    const foundPhoto = Photo.#all[photoId];
    return (foundPhoto)
  }

  static showPhoto(photoId){
    return Photo.findPhoto(photoId);
    //change inner HTML of photo section to display photo whos photoId === photoId
  }

  static showAllPhotos(){
    return Photo.#all;
  }
  
  static replacePhoto(photoId, newPhotoId){
    const replacingPhoto = Photo.findPhoto(photoId);
    replacingPhoto.id = newPhotoId;
    return replacingPhoto;
  }
  
  static deletePhoto(photoId){
    return Photo.#all.splice(photoId, 1);
  }
  
}

// Photo.postPhoto(0,'naoqnsdaqw', 'at the beach');
// Photo.postPhoto(1, 'swnsoqwnspqn', 'at work today');
// Photo.postPhoto(2,'naoqnsdaqw', 'at school');
// Photo.postPhoto(3,'naoqnsdaqw', 'at the mosque');
// Photo.postPhoto(4,'naoqnsdaqw', 'at the daycare');
// Photo.postPhoto(5,'naoqnsdaqw', 'at the restaurant');
// console.log("showing all", Photo.showAllPhotos())
// console.log("found photo 4!", Photo.findPhoto(4))
// // console.log("replacing 1", Photo.replacePhoto(1, 5))
// // console.log("deleting pic 2", Photo.deletePhoto(2));
// // console.log("deleting pic 1", Photo.deletePhoto(1))
// console.log(Photo.deletePhoto(2));
// console.log(Photo.deletePhoto(3));
// console.log(Photo.deletePhoto(4));
// console.log(Photo.deletePhoto(5));
// console.log("showing after", Photo.showAllPhotos())

