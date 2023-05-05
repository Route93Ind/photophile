const User = require('../models/user');
const Photo = require('../models/photo');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async (knex) => {
  await knex('users').del();
  await User.create('AnnBannan', 'codegirlA');
  await User.create('Reub', 'Beatles');

  await knex('photos').del();
  await knex('photos').insert([
    {url: 'https://randomwordgenerator.com/img/picture-generator/57e6d0424950a914f1dc8460962e33791c3ad6e04e50744172287ad2964cc0_640.jpg', caption: 'funny', user_id: 1},
    {url: 'https://randomwordgenerator.com/img/picture-generator/57e8d34b4a57ad14f1dc8460962e33791c3ad6e04e50744172297cdd9349cc_640.jpg', caption: 'magician man', user_id: 2},
    {url: 'https://randomwordgenerator.com/img/picture-generator/50e1d342425bb10ff3d8992cc12c30771037dbf85254794e722e7dd0964b_640.jpg', caption: 'funny faced lady', user_id: 1},
    {url: 'https://randomwordgenerator.com/img/picture-generator/52e9d542425ba814f1dc8460962e33791c3ad6e04e507441722a72dc9e4bc7_640.jpg', caption: 'a man and his fish', user_id: 2}
  ])
 };

