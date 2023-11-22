import { config } from "dotenv";
import { createPool } from "mysql2/promise";

//start var env
config()
//createPool equivalente a createConnection
export const conex = createPool({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE

})

