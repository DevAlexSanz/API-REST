"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _medicine = _interopRequireDefault(require("./medicine/medicine.route"));

var _patient = _interopRequireDefault(require("./patient/patient.route"));

var _doctor = _interopRequireDefault(require("./doctor/doctor.route"));

var _consultation = _interopRequireDefault(require("./consultation/consultation.route"));

var _upload = _interopRequireDefault(require("./upload/upload.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.use('/medicines', _medicine.default);
router.use('/patients', _patient.default);
router.use('/doctors', _doctor.default);
router.use('/consultation', _consultation.default);
router.use('/public', _upload.default);
var _default = router;
exports.default = _default;