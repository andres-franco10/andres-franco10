function ajax(url, metodo) {
    let xhr = new XMLHttpRequest
    xhr.open(metodo||'get',url)
    xhr.send()

    return xhr
}

function getNombreArchivo(id) {
    return 'plantillas/' + id + '.html'
}

function marcarLink(id) {
    let links = document.querySelectorAll('a')
    links.forEach( link => {
        if(link.id == id) {
            link.classList.add('active')
        }
        else {
            link.classList.remove('active')
        }
    })
}

function initJS(id) {

    switch(id) {
    
        case 'inicio': 
            initInicio()
            break

        case 'alta':
            initAlta()
            break

        case 'contacto':
            initContacto()
            break

        case 'nosotros':
            initNosotros()
            break

        default:
            initInicio()
    }
}

function cargarPlantilla(id) {
    let main = document.querySelector('main')

    let archivo = getNombreArchivo(id)
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status = 200) {

            //Cargo el HTML de la plantilla elegida
            main.innerHTML = xhr.response
            //Cargo el JS de la plantilla elegida
            initJS(id)
        }
    })
}

/* ----------------------------------------------------------------------------- */
/*     Carga de las vistas/plantillas de navegación dentro del elemento main     */
/* ----------------------------------------------------------------------------- */

function iniPlantillas() {
    let links = document.querySelectorAll('a')

    /* --------------------------------------------- */
    /*           Carga de la vista inicial           */
    /* --------------------------------------------- */
    let id = location.hash.slice(1) || 'inicio'
    marcarLink(id)
    cargarPlantilla(id)

    /* --------------------------------------------- */
    /*       Carga de la vista de navegación         */
    /* --------------------------------------------- */
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            let id = link.id
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        let id = location.hash.slice(1) || 'inicio'
        marcarLink(id)
        cargarPlantilla(id)
    })
}

function start() {
    iniPlantillas()
}

start()