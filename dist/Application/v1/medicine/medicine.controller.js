"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMedicine = exports.getAllMedicine = exports.deleteMedicine = exports.createMedicine = void 0;

var _medicine = _interopRequireDefault(require("./medicine.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getAllMedicine = async (req, res) => {
  try {
    const data = await _medicine.default.find({
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

exports.getAllMedicine = getAllMedicine;

const createMedicine = async (req, res) => {
  const {
    nameMedicine,
    description,
    sideEffect
  } = req.body;

  if (!nameMedicine || !description || !sideEffect) {
    return res.status(400).json({
      message: 'Faltan datos, la consulta debe contener nameMedicine, description y sideEffect',
      code: 400
    });
  }

  try {
    const data = await _medicine.default.create({
      nameMedicine,
      description,
      sideEffect
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al crear un nuevo Medicamento',
      code: 500
    });
  }
};

exports.createMedicine = createMedicine;

const updateMedicine = async (req, res) => {
  const payload = req.body;
  const {
    medicineId
  } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400
    });
  }

  try {
    const data = await _medicine.default.findByIdAndUpdate(medicineId, payload);
    return res.status(200).json(_objectSpread(_objectSpread({}, data), payload));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar el Medicamento',
      code: 500
    });
  }
};

exports.updateMedicine = updateMedicine;

const deleteMedicine = async (req, res) => {
  const {
    medicineId
  } = req.params;

  if (!medicineId) {
    return res.status(400).json({
      message: 'Por favor envie el id del Medicamento que desea eliminar',
      code: 400
    });
  }

  try {
    await _medicine.default.findByIdAndUpdate(medicineId, {
      status: 'inactive'
    });
    return res.status(200).json({
      message: 'Medicamento eliminado satisfactoriamente!',
      code: 200
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar el medicamento',
      code: 500
    });
  }
};

exports.deleteMedicine = deleteMedicine;