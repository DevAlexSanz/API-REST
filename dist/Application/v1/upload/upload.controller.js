"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadAsset = exports.getImage = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const uploadAsset = (req, res) => {
  const {
    file
  } = req;
  res.status(200).json({
    filename: file.originalname,
    mimetype: file.mimetype,
    url: `http://localhost:8080/v1/public/${file.filename}`
  });
};

exports.uploadAsset = uploadAsset;

const getImage = (req, res) => {
  const {
    fileName
  } = req.params;
  console.log(fileName);
  return res.sendFile(_path.default.join(__dirname, `../../../../public/uploads/${fileName}`));
};

exports.getImage = getImage;