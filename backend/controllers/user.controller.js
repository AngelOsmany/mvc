import {modelo} from "../models/user.model.js" //llamar el programa desde la direccion donde esta guardado, llamar "modelo" del programa. Cada punto es para ir mas dentro o mas fuera del directorio

export const test = ()=>{
    console.log("si funciona la conexion entre el controlador y el proyecto")
}

modelo.create({
    nombre:"osmany"
})