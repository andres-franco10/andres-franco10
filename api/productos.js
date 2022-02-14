// import  model from "../model/productos-mem.js" 
// import model from "../model/productos-file.js"
import config from '../config.js'
// const model = new ProductosModelMem()
// const model = new ProductosModelFile()
// const model = new ProductosModelMongoDB()

import ProductosModel from '../model/productos.js'



const model = ProductosModel.get(config.TIPO_DE_PERSISTENCIA)



const obtenerProductos = async () => {
    let productos = await model.readProductos()
    return productos
}
const obtenerProducto = async id =>{
    let producto = await model.readProducto(id)
    return producto


}
const guardarProducto = async producto => {

    let productoGuardado = await model.createProducto(producto)
    return productoGuardado

}
const actualizarProducto = async (id,producto) => {
    let productoActualizado = await  model.updateProducto(id,producto)
    return productoActualizado

}

const borrarProducto = async  id => {
    let productoBorrado = await model.deleteProducto(id)
    return productoBorrado

}

export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto

}