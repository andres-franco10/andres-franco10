import  api from "../api/carrito.js"



 /* CONTROLADOR POST CARRITO*/

const postCarrito = async (req,res) => {
    let carrito = req.body


    let carritoGuardado = await  api.guardarCarrito(carrito)
    res.json(carritoGuardado)
}



export default {
    postCarrito,
}