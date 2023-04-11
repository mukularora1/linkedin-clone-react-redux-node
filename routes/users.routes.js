module.exports = (app) => {
  const users = require('../controllers/users.controllers.js');

  // create user account
  app.post('/api/create-user-account', users.createUserAccount);

  // create user account
  app.post('/api/sign-in', users.signIn);

  // upload image url
  app.post('/api/upload-profile-img', users.uploadProfileImg);
};
