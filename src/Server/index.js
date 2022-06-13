import express from 'express';

import getConfig from 'config';
import { initializeDB } from './db';

const { port } = getConfig();

const app = express();

// creating Server
console.log('======================================================');
console.log('Inicializando el servicio de MongoDB...');
const initializeServer = async (routes) => {
  // initialize DB
  await initializeDB();
  console.log('La conexión con MongoDB se ha realizado con éxito!');
  console.log('====================================================');

  // json parse
  app.use(express.json());

  // set urls
  app.use(routes);

  app.get('/', (req, res) => {
    res.send(`Para obtener información de los registros ingresa a:
    Medicamentos: http://localhost:${port}/v1/medicines,
    Pacientes: http://localhost:${port}/v1/patients,
    Doctores: http://localhost:${port}/v1/doctors`);
  });

  // create express app
  app.listen(port, () => {
    console.log(`Ingrese a: http://localhost:${port}, para más información`);
  });
};

export default initializeServer;
