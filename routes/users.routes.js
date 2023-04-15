module.exports = (app) => {
  const users = require('../controllers/users.controllers.js');

  // create user account
  app.post('/api/create-user-account', users.createUserAccount);

  // create user account
  app.post('/api/sign-in', users.signIn);

  // upload image url
  app.post('/api/upload-profile-img', users.uploadProfileImg);

  // upload user name
  app.post('/api/upload-user-name', users.uploadUserName);

  // get user data
  app.post('/api/get-all-user-data', users.getAllUserData);
};
