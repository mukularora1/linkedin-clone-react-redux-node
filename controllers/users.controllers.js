const users = require('../models/users.models.js');
exports.createUserAccount = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  users.createUserAccount(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Entity.',
      });
    else res.send(data);
  });
};
