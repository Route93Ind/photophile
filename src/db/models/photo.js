const knex = require('../knex');
const authUtils = require('../../utils/auth-utils');

class Photo {
  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
  constructor({ url, caption,user_id}) {
    // this.id = this.id;
    this.url = url;
    this.caption = caption;
    this.user_id = user_id;
  }

  static async post(url, caption, userId) {
    try{
      const {rows: [photo]} = await knex.raw(`
      INSERT INTO photos 
      (url, caption, user_id) 
      VALUES (?, ?, ?) RETURNING *`, [url, caption, userId]);
      return photo;
    }catch(err){
      console.error(err);
      return null;
    }
  }

  static findPhoto = async (photoId) => {
    try{
      const result = await knex.raw(`
      SELECT * 
      FROM photos
      WHERE id = ?`, [photoId]);
      return result.rows[0];
    } catch(err){
      console.error(err);
      return null;
    }
  }
  
  static showAllPhotos = async (userId) => {
    try{
      const { rows } = await knex.raw(`
      SELECT *
      FROM photos
      WHERE user_id = ?`, [userId]);
      return rows;
    } catch(err){
      console.error(err);
      return null;
    }
  };

   static replacePhoto = async (photoId, url, caption) => {
    try{
      const query = `
      UPDATE photos
        SET
          url = ?, caption = ?
        WHERE 
          id = ?`;
      const { rows: [photo]} = await knex.raw(query, [url, caption, photoId]);
    } catch(err){
      console.error(err);
      return null;
    }
  }

  static deletePhoto = async (photoId) => {
    try{
      const result = await knex.raw(`
      DELETE FROM photos
      WHERE id  = ?`, [photoId])
      // return result.rows;
    } catch(err){
      console.error(err);
      return null;
    }
  }

  static deleteAllPhotos = async () => {
    try {
      return knex.raw('TRUNCATE photos;');
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

// const  testModel = async() => {
//   const result = await Photo.postPhoto('https://randomwordgenerator.com/img/picture-generator/57e1d6434c51ac14f1dc8460962e33791c3ad6e04e507440762879dd974dc1_640.jpg', 'my cool guitar', 2);
//   // const result = await Photo.showAllPhotos(1);
//   // const result = await Photo.findPhoto(3);
//   // const result = await Photo.replacePhoto('51nac7dandoan', 'at train today');
//   // const result = await Photo.deletePhoto(25);
//   // const result = await Photo.deleteAllPhotos();

//   console.log(result)
//   knex.destroy();
// }

// testModel();

module.exports = Photo;
