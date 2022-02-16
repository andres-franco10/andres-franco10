class CarritoController {

    constructor() {
        try {
            carritoModel.inicializar( JSON.parse( localStorage.getItem('carrito') ) || [] )
        }
        catch {
            carritoModel.inicializar([])
            localStorage.setItem('carrito', carritoModel.obtener())
        }
    }

    

    agregarAlCarrito(producto) {

        if(!carritoModel.productoExiste(producto)) {
            producto.cantidad = 1
            carritoModel.guardar(producto)
        }
        else {
            let productoDeCarrito = carritoModel.obtenerProducto(producto)
            productoDeCarrito.cantidad++
        }

        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))
    }

    async borrarProducto(id) {

        carritoModel.borrar(id)
        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))

        await renderCarrito(carritoModel.obtener())
    }

    async enviarCarrito() {
        var elemSectionCarrito = document.querySelector('.section-carrito')

        // ------ Envió el carrito al backend ------
        elemSectionCarrito.innerHTML = '<h2>Realizando pedido...</h2><img height="100" src= "img/logo/pedidoRealizado.jpg"></img>'

        let preference = await carritoService.guardarCarrito(carritoModel.obtener())

        console.log(preference)


        elemSectionCarrito.innerHTML = '<h2><b>...Pedido Realizado.</b></h2><img height="100" src= "img/logo/thumbsUP.jpg"></img> '


        // ------ borro el carrito del modelo y del localstorage ------
        carritoModel.inicializar([])
        localStorage.setItem('carrito', carritoModel.obtener())

        // ------ cierro la ventana del menú del carrito un tiempo después ------
        setTimeout(async() => {
            elemSectionCarrito.classList.remove('section-carrito--visible')
            mostrarCarrito = false

            await renderPago(preference)
        },0)
    }
}


const carritoController = new CarritoController()