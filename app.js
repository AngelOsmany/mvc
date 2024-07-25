import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {test} from "./backend/controllers/user.controller.js" //llamar la constante test desde user.controller.js

dotenv.config(); //para que funcione lo del .env

mongoose.connect(process.env.urlbd) //llamar el link de urlbd que esta en .env
.then(()=>{
    console.log("Si funciona la conexion a la base de datos")
})
.catch((err)=>{
    console.log("No funciono la conexxion a la base de datos", err)
})

const app = express(); //crear servidor local
app.use(cors()); //usar cors para el servidor

app.listen(4000, ()=>{ //escuchar el servidor para ver si funciona en el puerto 4000 o 5000
    console.log("funciona mi servidor local")
}) 

test()//para que se active el import y muestre lo que hace en este caso si funciona la conexion entre el controlador y el proyecto