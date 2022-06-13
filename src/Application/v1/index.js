import express from 'express';
import medicineRoutes from './medicine/medicine.route';
import patientRoutes from './patient/patient.route';
import doctorRoutes from './doctor/doctor.route';
import publicRoutes from './upload/upload.route';

const router = express.Router();

router.use('/public', publicRoutes);
router.use('/medicines', medicineRoutes);
router.use('/patients', patientRoutes);
router.use('/doctors', doctorRoutes);

export default router;
