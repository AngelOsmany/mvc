import { Schema, model } from "mongoose" //importar funcion Schema & model de mongoose

//aqui solo se guarda el esquema y el modelo

export const esquema = new Schema({ //se elimina mongoose por el import de arriba
    nombre:{
        type:String
    }
})
export const modelo = new model("usuarios", esquema) //se elimina mongoose por el import de arriba, el export es porque se va a usar en otro lado