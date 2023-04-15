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
      if (res.length == 0) {
        result(null, { errorStatus: 'userNotExist' });
      } else {
        result(null, {
          ...res,
        });
      }
    }
  );
};
user.uploadProfileImg = (data, result) => {
  console.log('*****', data.img_url.path, data.bgImgUrl.path, data.userId);
  sql.query(
    `UPDATE users set display_picture_url = ?, background_image_url=? where id = ? `,
    [data.img_url.path, data.bgImgUrl.path, data.userId],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};
user.uploadUserName = (data, result) => {
  sql.query(
    `UPDATE users set name = ? where id = ? `,
    [data.name, data.userId],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};
user.getAllUserData = (data, result) => {
  console.log(typeof data.userId);
  sql.query(`SELECT * FROM users where id = ? `, data.userId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log(res);
    result(null, res);
  });
};

module.exports = user;
