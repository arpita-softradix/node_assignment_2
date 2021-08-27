const multer = require("multer");

// const imageFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb("Please upload only images.", false);
//   }
//   console.log("-----------------: ",file.mimetype);
// };
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null,  __dirname + "/resources/static/assets/uploads/");
//   },   
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
//   },
// });
// const uploadFile = multer({ storage: storage, fileFilter: imageFilter });
// cb(null, path.join(__dirname, '/uploads/'));



let uploadFile = multer({dest:'upload'})

module.exports = uploadFile;

