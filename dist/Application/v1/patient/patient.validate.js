"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePatientsSchema = exports.createPatientsSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createPatientsSchema = _joi.default.object({
  fullName: _joi.default.string().required(),
  age: _joi.default.number().required(),
  address: _joi.default.string().required(),
  numberPhone: _joi.default.number().required().error(errors => {
    errors.forEach(err => {
      if (err.code === 'any.required') {
        err.message = 'Por favor ingrese todos los campos';
      }
    });
    return errors;
  })
});

exports.createPatientsSchema = createPatientsSchema;

const updatePatientsSchema = _joi.default.object({
  fullName: _joi.default.string().required(),
  age: _joi.default.number().required(),
  address: _joi.default.string().required(),
  numberPhone: _joi.default.number().required()
}).or('fullName', 'age', 'address', 'numberPhone');

exports.updatePatientsSchema = updatePatientsSchema;