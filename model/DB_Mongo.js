import mongoose from 'mongoose'
import config from '../config.js'


// const STR_CNX = 'mongodb://127.0.0.1/ecommerce' // mongo db local
// const STR_CNX = 'mongodb+srv://AndresFranco10:andres10@cluster0.8dc8f.mongodb.net/ecommerce?retryWrites=true&w=majority' // mongo db atlas

class DB_Mongo {
    static conexionOk = false
    
    static genIdKey (obj) {
        if (Array.isArray(obj)){
            for (let i=0; i<obj.length ; i++) {
                obj[i].id = obj[i]._id
            }
        }
        else{
            obj.id = obj._id
        }
        return obj
    }

    static async conectarDB() {

        try{
        if (!DB_Mongo.conexionOk) {
            await mongoose.connect(config.STR_CNX , {
                useNewUrlParser : true,
                useUnifiedTopology : true,
            })
            console.log('base de datos conectada')


            DB_Mongo.conexionOk = true 
        }
        }
        catch(error){

            console.log(`mongo db error al conectar: ${error.message}`)
        }
    }
    
}


export default DB_Mongo