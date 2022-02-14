class CarritoService {

    URL_CARRITO = '/api/carrito/'//'https://61e035480f3bdb0017934e9d.mockapi.io/carrito/'


    async guardarCarrito(carrito) {
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }


    
}

const carritoService = new CarritoService()