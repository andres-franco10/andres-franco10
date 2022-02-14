
function renderCards(productos) {

    fetch('vistas/inicio.hbs')
    .then(r => r.text())
    .then( plantilla => {
        // compile the template
        var template = Handlebars.compile(plantilla);
        // execute the compiled template and print the output to the console
        let html = template({ productos: productos });

        document.querySelector('.cards-container').innerHTML = html
    })
}


function agregarAlCarrito (id) {

    let producto = productosModel.obtener(id)

    carritoController.agregarAlCarrito(producto)
    
    

    document.querySelectorAll('.btnAgregarAlCarrito').forEach(btnAgregarAlCarrito=> btnAgregarAlCarrito.addEventListener('click', cartelSeAgregoAlCarrito))

    function cartelSeAgregoAlCarrito (){
   
            this.style.marginBottom = '0px'
            seAgregoAlCarrito = this.nextElementSibling;

            
            seAgregoAlCarrito.innerHTML = '<b>Se agregó al carrito</b>'
            seAgregoAlCarrito.style.fontSize = '14px'
            seAgregoAlCarrito.style.textAlign = 'right'

                setTimeout(() => {

                seAgregoAlCarrito.innerHTML = ''
                this.style.marginBottom = '20px'

                },850)

                
    }


    
    // document.querySelectorAll('.btnAgregarAlCarrito').forEach(btnAgregarAlCarrito=> btnAgregarAlCarrito.addEventListener('click', cartNumbers))

    // function cartNumbers() {
  
    //     let productNumbers = localStorage.getItem('cartNumbers')

    //     productNumbers = parseInt(productNumbers)

    //     console.log (productNumbers)

    //     if (productNumbers) {
    //         localStorage.setItem('cartNumbers', productNumbers + 1);
    //         document.querySelector('.search-bar__contador-productos').textContent = productNumbers + 1;
    //     } else {
    //         localStorage.setItem('cartNumbers', 1);
    //         document.querySelector('.search-bar__contador-productos').textContent = 1;
    //     }

    // }
}




async function initInicio() {


    productosModel.inicializar(await productosController.obtenerProductos()) // []
    let productos = productosModel.obtener()

    renderCards(productos)

    let lg = productos.length
    document.querySelector('.section-cards__header p').innerHTML = lg? `Se encontraron ${lg} productos.` : ''
}
