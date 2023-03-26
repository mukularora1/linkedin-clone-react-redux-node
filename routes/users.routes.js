module.exports = (app) => {
  const users = require('../controllers/users.controllers.js');

  // create user account
  app.post('/api/create-user-account', users.createUserAccount);
};
