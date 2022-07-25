"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer.default.diskStorage({
  destination(req, file, cb) {
    cb(null, _path.default.join(__dirname, '../../public/uploads/'));
  },

  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}-${file.originalname}`;
    cb(null, filename);
  }

});

const uploadMiddleware = (0, _multer.default)({
  storage
});
var _default = uploadMiddleware;
exports.default = _default;