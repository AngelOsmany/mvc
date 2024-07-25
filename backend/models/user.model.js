import { Schema, model } from "mongoose" //importar funcion Schema & model de mongoose

const esquema = new Schema({ //se elimina mongoose por el import de arriba
    nombre:{
        type:String
    }
})
export const modelo = new model("usuarios", esquema) //se elimina mongoose por el import de arriba, el export es porque se va a usar en otro lado