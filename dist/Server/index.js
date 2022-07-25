"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../config"));

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  port
} = (0, _config.default)();
const app = (0, _express.default)(); // creating Server

console.log('======================================================');
console.log('Inicializando el servicio de MongoDB...');

const initializeServer = async routes => {
  // initialize DB
  await (0, _db.initializeDB)();
  console.log('La conexión con MongoDB se ha realizado con éxito!');
  console.log('===================================================='); // json parse

  app.use(_express.default.json()); // set urls

  app.use(routes);
  app.get('/', (req, res) => {
    res.send(`Para obtener información de los registros ingresa a:
    Medicamentos: http://localhost:${port}/v1/medicines,
    Pacientes: http://localhost:${port}/v1/patients,
    Doctores: http://localhost:${port}/v1/doctors`);
  }); // create express app

  app.listen(port, () => {
    console.log(`Ingrese a: http://localhost:${port}, para más información`);
  });
};

var _default = initializeServer;
exports.default = _default;