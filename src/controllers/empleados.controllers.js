import { conex } from "../db.js"

const getEmpleados  = async (req, res) => {
    try {
        const resultado = await conex.query("Select * from empleados")
        res.json(resultado[0])    
    } catch (error) {
        return res.status(500).json({
            message:"Error DB getEmpleados"
        })
    }
    
}

const getEmpleadoId  = async (req, res) => {
    try {
        const resultado = await conex.query("Select * from empleados WHERE id = ? " , [req.params.id])    
        if(resultado[0] <= 0) return res.status(404).json({
            message : "No se encontró el empleado",
        })    
        res.json(resultado[0])
    } catch (error) {
        return res.status(500).json({
            message:"Error DB getEmpleados"
        })
    }
}


const createEmpleado  = async (req, res) => {
    try {
        const {nombre, salario} = req.body
        const [resultado] = await conex.query(" INSERT INTO empleados(nombre, salario) VALUES (?,?)", [nombre,salario])
        res.send({
            id: resultado.insertId,
            nombre,
            salario
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error DB getEmpleados"
        })   
    }
    
}

const updateEmpleado  = async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, salario} = req.body
        const resultado = await conex.query("UPDATE empleados SET nombre = IFNULL(?,nombre) , salario = IFNULL(?,salario) WHERE id = ? " , [nombre,salario, id])    
        if(resultado[0].affectedRows <= 0) return res.status(404).json({
            message : "No hay registros para actuazliar con el id : " + id
        })    
        res.json({
            "message": "Empleado " + req.params.id + " Actualizado!"
        })
        //res.sendStatus(204), otra opción
    } catch (error) {
        return res.status(500).json({
            message:"Error DB getEmpleados"
        }) 
    }
}

const deleteEmpleado  = async (req, res) => {
    try {
         const resultado = await conex.query("Delete from empleados WHERE id = ? " , [req.params.id])    
        if(resultado[0].affectedRows <= 0) return res.status(404).json({
            message : "No hay registros para eliminar con el id : " + req.params.id
        })    
        res.json({
            "message": "Empleado " + req.params.id + " eliminado!"
        })
        //res.sendStatus(204), otra opción
    } catch (error) {
        return res.status(500).json({
            message:"Error DB getEmpleados"
        }) 
    }
}

export {getEmpleados, createEmpleado, getEmpleadoId,updateEmpleado,deleteEmpleado}

