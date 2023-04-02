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

exports.signIn = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // check  Entity name in the database
  users.signIn(req.body, (err, data) => {
    console.log('data0', data[0].password);

    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Entity.',
      });
    } else {
      bcrypt.compare(req.body.password, data[0].password, (err, result) => {
        if (err) {
          console.log('error:', err);
          res.status(500).send({
            message: 'Error occurred while comparing passwords.',
          });
        }
        if (result) {
          console.log(result);
          data[0].is_auth = true;
          // the passwords match
          res.send(data);
        } else {
          res.status(401).send({
            message: 'Invalid password.',
          });
        }
      });
    }
  });
};
