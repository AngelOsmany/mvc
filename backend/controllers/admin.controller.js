import { modeloadm } from "../models/admin.model.js";

export const test2 = ()=>{
    console.log("funciona el controlador de admin")
}
modeloadm.create({
    nombre:"Cabrera"
})