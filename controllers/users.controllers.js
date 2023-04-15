const users = require('../models/users.models.js');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
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
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Entity.',
      });
    } else {
      if (data.errorStatus) {
        res.send({ errorStatus: data.errorStatus });
      } else {
        const token = jwt.sign({ userId: data[0].id }, 'your_secret_key_here');
        bcrypt.compare(req.body.password, data[0].password, (err, result) => {
          if (err) {
            console.log('error:', err);
            res.status(500).send({
              message: 'Error occurred while comparing passwords.',
            });
          }
          if (result) {
            data[0].token = token;
            data[0].is_auth = true;
            res.send(data);
          } else {
            res.send({ errorStatus: 'passwordIncorrect' });
          }
        });
      }
    }
  });
};
exports.uploadProfileImg = (req, res) => {
  users.uploadProfileImg(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while uploading images.',
      });
    else res.send(data);
  });
};
exports.uploadUserName = (req, res) => {
  users.uploadUserName(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while uploading name.',
      });
    else res.send(data);
  });
};
exports.getAllUserData = (req, res) => {
  users.getAllUserData(req.body, (err, data) => {
    console.log(data);
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while getting user data.',
      });
    else res.send(data);
  });
};
