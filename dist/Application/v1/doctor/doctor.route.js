"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _validate = _interopRequireDefault(require("../../../middlewares/validate"));

var _doctor = require("./doctor.controller");

var _doctor2 = require("./doctor.validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _doctor.getAllDoctor); // get all

router.post('/', (0, _validate.default)(_doctor2.createDoctorsSchema), _doctor.createDoctor); // create user

router.put('/:doctorId', (0, _validate.default)(_doctor2.updateDoctorsSchema), _doctor.updateDoctor); // update user

router.delete('/:doctorId', _doctor.deleteDoctor); // delete user

var _default = router;
exports.default = _default;