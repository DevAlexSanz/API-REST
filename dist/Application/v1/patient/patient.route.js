"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _validate = _interopRequireDefault(require("../../../middlewares/validate"));

var _patient = require("./patient.controller");

var _patient2 = require("./patient.validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _patient.getAllPatient); // get all

router.post('/', (0, _validate.default)(_patient2.createPatientsSchema), _patient.createPatient); // create user

router.put('/:patientId', (0, _validate.default)(_patient2.updatePatientsSchema), _patient.updatePatient); // update user

router.delete('/:patientId', _patient.deletePatient); // delete user

var _default = router;
exports.default = _default;