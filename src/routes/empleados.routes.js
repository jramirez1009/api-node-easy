import { conex } from "../db.js";
import { Router } from "express";
import { getEmpleados,getEmpleadoId,createEmpleado,deleteEmpleado, updateEmpleado } from "../controllers/empleados.controllers.js"

const router = Router();

router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleadoId)
router.post('/empleados', createEmpleado)
router.put('/empleados/:id', updateEmpleado)
router.delete('/empleados/:id', deleteEmpleado)

export default router