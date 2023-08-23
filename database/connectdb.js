import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO, { useNewUrlParser: true, useUnifiedTopology: true } )
    console.log('Connect DB')
} catch (error) {
    console.log('Error de conexion a MongoDB: ', error)
}
