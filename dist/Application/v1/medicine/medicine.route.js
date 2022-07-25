"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _validate = _interopRequireDefault(require("../../../middlewares/validate"));

var _medicine = require("./medicine.controller");

var _medicine2 = require("./medicine.validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _medicine.getAllMedicine); // get all

router.post('/', (0, _validate.default)(_medicine2.createMedicinesSchema), _medicine.createMedicine); // create user

router.put('/:medicineId', (0, _validate.default)(_medicine2.updateMedicinesSchema), _medicine.updateMedicine); // update user

router.delete('/:medicineId', _medicine.deleteMedicine); // delete user

var _default = router;
exports.default = _default;