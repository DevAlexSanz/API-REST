"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMedicinesSchema = exports.createMedicinesSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createMedicinesSchema = _joi.default.object({
  nameMedicine: _joi.default.string().required(),
  description: _joi.default.string().required(),
  sideEffect: _joi.default.string().required().error(errors => {
    errors.forEach(err => {
      if (err.code === 'any.required') {
        err.message = 'Por favor ingrese todos los campos';
      }
    });
    return errors;
  })
});

exports.createMedicinesSchema = createMedicinesSchema;

const updateMedicinesSchema = _joi.default.object({
  nameMedicine: _joi.default.string().required(),
  description: _joi.default.number().required(),
  sideEffect: _joi.default.string().required()
}).or('nameMedicine', 'description', 'sideEffect');

exports.updateMedicinesSchema = updateMedicinesSchema;