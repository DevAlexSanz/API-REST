"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singularName = exports.pluralName = exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _getModelName = _interopRequireDefault(require("../../../Utils/getModelName"));

var _patient = require("../patient/patient.model");

var _doctor = require("../doctor/doctor.model");

var _medicine = require("../medicine/medicine.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const {
  singularName,
  pluralName
} = (0, _getModelName.default)('consultation');
exports.pluralName = pluralName;
exports.singularName = singularName;
const schema = new Schema({
  description: {
    type: String,
    required: true
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: _patient.pluralName,
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: _doctor.pluralName,
    required: true
  },
  medicine: {
    type: Schema.Types.ObjectId,
    ref: _medicine.pluralName,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
}); // Ensure virtual fields are serialised.

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,

  transform(_doc, ret) {
    delete ret._id;
  }

}); // rename name Example to singular Model

var _default = _mongoose.default.models[singularName] || _mongoose.default.model(pluralName, schema);

exports.default = _default;