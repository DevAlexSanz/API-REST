"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDoctorsSchema = exports.createDoctorsSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createDoctorsSchema = _joi.default.object({
  fullName: _joi.default.string().required(),
  age: _joi.default.number().required(),
  address: _joi.default.string().required(),
  numberPhone: _joi.default.number().required().error(errors => {
    errors.forEach(err => {
      if (err.code === 'any.required') {
        err.message = 'Ingrese los campos requeridos';
      }
    });
    return errors;
  })
});

exports.createDoctorsSchema = createDoctorsSchema;

const updateDoctorsSchema = _joi.default.object({
  fullName: _joi.default.string().required(),
  age: _joi.default.number().required(),
  address: _joi.default.string().required(),
  numberPhone: _joi.default.number().required()
}).or('fullName', 'age', 'address', 'numberPhone');

exports.updateDoctorsSchema = updateDoctorsSchema;