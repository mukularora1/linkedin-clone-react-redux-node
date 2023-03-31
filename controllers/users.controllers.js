const users = require('../models/users.models.js');
var bcrypt = require('bcryptjs');

exports.createUserAccount = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  const password = await bcrypt.hash(req.body.password, 10);
  let userData = {
    ...req.body,
    password: password,
  };
  users.createUserAccount(userData, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Entity.',
      });
    else res.send(data);
  });
};
