"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateConsultation = exports.getAllConsultation = exports.deleteConsultation = exports.createConsultation = void 0;

var _consultation = _interopRequireDefault(require("./consultation.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getAllConsultation = async (req, res) => {
  try {
    const data = await _consultation.default.find({
      status: 'active'
    }).populate(['patient', 'doctor', 'medicine']);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500
    });
  }
};

exports.getAllConsultation = getAllConsultation;

const createConsultation = async (req, res) => {
  const {
    description,
    patient,
    doctor,
    medicine
  } = req.body;

  if (!description || !patient || !doctor || !medicine) {
    return res.status(400).json({
      message: 'Faltan datos, la consulta debe contener description, medicine, patient y doctor',
      code: 400
    });
  }

  try {
    const data = await _consultation.default.create({
      description,
      patient,
      doctor,
      medicine
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al crear una nueva Consulta',
      code: 500
    });
  }
};

exports.createConsultation = createConsultation;

const updateConsultation = async (req, res) => {
  const payload = req.body;
  const {
    consultationId
  } = req.params;

  if (Object.keys(payload).length === 0) {
    return res.status(400).json({
      message: 'Faltan datos o no a enviado el ID, Intentelo nuevamente!',
      code: 400
    });
  }

  try {
    const data = await _consultation.default.findByIdAndUpdate(consultationId, payload, {
      new: true
    }).populate(['patient', 'doctor', 'medicine']);
    return res.status(200).json(_objectSpread(_objectSpread({}, data), payload));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al actualizar la Consulta',
      code: 500
    });
  }
};

exports.updateConsultation = updateConsultation;

const deleteConsultation = async (req, res) => {
  const {
    consultationId
  } = req.params;

  if (!consultationId) {
    return res.status(400).json({
      message: 'Por favor envie el id de la Consulta que desea eliminar',
      code: 400
    });
  }

  try {
    await _consultation.default.findByIdAndUpdate(consultationId, {
      status: 'inactive'
    });
    return res.status(200).json({
      message: 'Consulta eliminada satisfactoriamente!',
      code: 200
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al eliminar la consulta',
      code: 500
    });
  }
};

exports.deleteConsultation = deleteConsultation;