import express  from "express";
import empleadoRoutes from "./routes/empleados.routes.js"

//start express 
const app = express();
app.use(express.json())

//call routes
app.use('/api', empleadoRoutes)

//url not exists
app.use((req, res, next) => {
    res.status(404).json({
        message:"endpoint not found"
    })
})

export default app;
