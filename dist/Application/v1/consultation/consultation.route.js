"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _consultation = require("./consultation.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _consultation.getAllConsultation); // get all

router.post('/', _consultation.createConsultation); // create user

router.put('/:consultationId', _consultation.updateConsultation); // update user

router.delete('/:consultationId', _consultation.deleteConsultation); // delete user

var _default = router;
exports.default = _default;