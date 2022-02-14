import ProductosModelMem from "./productos-mem.js"
import ProductosModelFile from "./productos-file.js"
import ProductoModelMongoDB from "./productos-mongodb.js"

class ProductoModel {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log(' persistencia en memoria (productos)')
                return new ProductosModelMem()

            case 'FILE':
                console.log('persisitencia en file system(productos)')
                return new ProductosModelFile()
                    
            case 'MONGODB':
                console.log('******* PERSISTENCIA EN MONGODB (productos)')
                return new ProductoModelMongoDB()

            default:                 
                console.log('persistencia en default MEM (productos)')
                return new ProductosModelMem()
        }
    }
}

export default ProductoModel