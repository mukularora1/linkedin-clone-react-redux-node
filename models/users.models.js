const sql = require('./db.js');

const user = function (data) {
  this.email = data.email;
  this.phone_number = data.phone_number;
  this.password = data.password;
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
user.signIn = (data, result) => {
  sql.query(
    `select id,email,password,phone_number from users where ${
      data.email ? 'email' : 'phone_number'
    } = ? `,
    data.email,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('->', res);
      result(null, {
        ...res,
      });
    }
  );
};
module.exports = user;
