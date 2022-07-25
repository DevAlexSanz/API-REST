"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _upload = _interopRequireDefault(require("../../../middlewares/upload"));

var _upload2 = require("./upload.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/upload', _upload.default.single('asset'), _upload2.uploadAsset);
router.get('/:fileName', _upload2.getImage);
var _default = router;
exports.default = _default;