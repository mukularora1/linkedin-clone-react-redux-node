const multer = require('multer');
const fs = require('fs');
module.exports = {
  multerWriteFile(req, res, DIR, fileTypes, file_name = '') {
    return new Promise((resolve) => {
      let fileName;
      const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, DIR);
        },
        filename: (req, file, cb) => {
          if (file_name.length > 0) {
            fileName = file_name;
          } else {
            fileName =
              Date.now() +
              file.originalname
                .toLowerCase()
                .split(' ')
                .join('-')
                .replace(/[/\\?%*:|"<>]/g, '-');
          }
          cb(null, fileName);
        },
      });
      const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
          if (fileTypes.includes(file.mimetype)) {
            cb(null, true);
          } else {
            cb(null, false);
            return cb(
              new Error(`Only ${fileTypes.join(' ')}  format allowed!`)
            );
          }
        },
      });
      upload.single('file')(req, res, (err) => {
        if (err) {
          resolve({ error: err.message });
        }
        resolve({
          status: 'success',
          name: fileName,
          path: `${DIR}/${fileName}`,
          url: `${req.protocol}://${req.get('host')}/${DIR}/${fileName}`,
        });
      });
    });
  },
  deleteFile(path) {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      return { status: 'success', message: 'File deleted successfully' };
    } else {
      return { status: 'success', message: 'File not found' };
    }
  },
};
