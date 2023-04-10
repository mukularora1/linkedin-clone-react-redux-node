const fs = require('fs');
const path = require('path');
const { multerWriteFile, deleteFile } = require('../services/multer');
module.exports = async (app) => {
  app.post('/api/upload-file', async function (req, res) {
    try {
      let response;
      if (req.headers.filename != undefined) {
        response = await multerWriteFile(
          req,
          res,
          req.headers.dir,
          req.headers.supportedtype,
          req.headers.filename
        );
      } else {
        response = await multerWriteFile(
          req,
          res,
          req.headers.dir,
          req.headers.supportedtype
        );
      }
      if (response.err) {
        res.status(500).send({ err: err });
        return;
      } else {
        res.send(response);
      }
    } catch (error) {
      res.send(error);
    }
  });
  app.post('/api/remove-file', function (req, res) {
    res.send(deleteFile(req.body.path));
  });
};
