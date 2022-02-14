import express from 'express'
import router from './router/productos.js'
import routerCarrito from './router/carrito.js'
import DB_Mongo from './model/DB_Mongo.js'
import config from './config.js'


/* ------------ CONEXION HACIA MONGO DB --------------- */   
if(config.TIPO_DE_PERSISTENCIA == 'MONGODB') {
    DB_Mongo.conectarDB()
}

/* ------------ --------------- */    


const app = express()
                                // MIDDLEWARES O CAPAS
app.use(express.static('public'))                   //  Aquí recursos estáticos, que nuestro servidor devuelve al cliente si el cliente se lo pide. Zona de archivos provistos por el servidor en un espacio publico
app.use(express.json())                             //  últimos dos sirven para parsear la información que viene por put o post y poder acoplar al objeto de requerimiento a traves de la clave body
app.use(express.urlencoded({extended: true}))       //  Para que el servidor entienda el formato de la información enviada

app.use('/api/productos', router)                  // una forma de agrupar rutas bajo un mismo lugar, encabezado de la ruta. EL servidos escucha los requerimientos del cliente por esta ruta
app.use('/api/carrito', routerCarrito)

console.log('process.env.PORT:', process.env.PORT)
console.log('process.env.TIPO_P:', process.env.TIPO_P)
console.log('process.env.CNX:', process.env.CNX)

console.log(config)

/* ------------ LISTEN DEL SERVIDOR --------------- */    
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`) )


