// import  model from "../model/productos-mem.js" 
// import model from "../model/productos-file.js"
// import model from '../model/productos-mongodb.js'
import CarritoModel from '../model/carrito.js'
import config from '../config.js'

const model = CarritoModel.get(config.TIPO_DE_PERSISTENCIA)
const guardarCarrito = async carrito => {

    let carritoGuardado = await model.createCarrito(carrito)
    return carritoGuardado

}


export default {
    guardarCarrito,
}