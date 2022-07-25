"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePatient = exports.getAllPatient = exports.deletePatient = exports.createPatient = void 0;

var _patient = _interopRequireDefault(require("./patient.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getAllPatient = async (req, res) => {
  try {
    const data = await _patient.default.find({
      status: 'active'
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500
    });
  }
};

exports.getAllPatient = getAllPatient;

const createPatient = async (req, res) => {
  const {
    fullName,
    age,
    address,
    numberPhone
  } = req.body;

  if (!fullName || !age || !address || !numberPhone) {
    return res.status(400).json({
      message: 'Faltan datos, la consulta debe contener fullName, age y address y numberPhone',
      code: 400
    });
  }

  try {
    const data = await _patient.default.create({
      fullName,
      age,
      address,
      numberPhone
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al crear un nuevo Usuario',
      code: 500
    });
  }
};

exports.createPatient = createPatient;

const updatePatient = async (req, res) => {
  const payload = req.body;
  const {
    patientId
  } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400
    });
  }

  try {
    const data = await _patient.default.findByIdAndUpdate(patientId, payload);
    return res.status(200).json(_objectSpread(_objectSpread({}, data), payload));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar al Paciente',
      code: 500
    });
  }
};

exports.updatePatient = updatePatient;

const deletePatient = async (req, res) => {
  const {
    patientId
  } = req.params;

  if (!patientId) {
    return res.status(400).json({
      message: 'Por favor envie el id del Paciente que desea eliminar',
      code: 400
    });
  }

  try {
    await _patient.default.findByIdAndUpdate(patientId, {
      status: 'inactive'
    });
    return res.status(200).json({
      message: 'Paciente eliminado satisfactoriamente!',
      code: 200
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar al paciente',
      code: 500
    });
  }
};

exports.deletePatient = deletePatient;