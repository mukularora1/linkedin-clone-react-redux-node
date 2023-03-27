const sql = require('./db.js');
const user = function (data) {
  this.email = data.email;
  this.phone_number = data.phone_number;
  this.password = data.width;
  this.created_at = data.height;
  this.updated_at = data.unit;
};

user.createUserAccount = (data, result) => {
  sql.query('INSERT INTO users SET ?', data, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, {
      id: res.insertId,
      ...data,
    });
  });
};