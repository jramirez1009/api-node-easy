import { config } from "dotenv";
import app from './app.js'
//start var env
config()

app.listen(process.env.PORT)
