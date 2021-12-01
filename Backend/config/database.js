//tengo la configuración para nuestra base de datos.
// vamos a parametrizar --> ingresamos el puerto nombre del puerto y la base de datos donde se va a almacenar
const mongoose = require("mongoose");
const host = "localhost";
const port = "27017";
// base de datos de los productos
const db = "tutienda";
//cadena de conexión

exports.mongoConnect = () => {
   //const mongoStringConnection = `mongodb://${host}:${port}/${db}`; //comillas simples invertidas alt+96, no funciona con comilla normal
    const mongoStringConnection = "mongodb+srv://andrepijg:andr3a0415@cluster0.vcxxv.mongodb.net/tutienda?retryWrites=true&w=majority";
    mongoose.connect(mongoStringConnection);

        //mongoose.connect("mongodb+srv://andrepijg:andr3a0415@cluster0.vcxxv.mongodb.net/tutienda?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    //.then(res => console.log('Connected to db'));

    mongoose.Promise = global.Promise;
    // variable que me almacene la información de la base de datos
    const dbConnection = mongoose.connection;
    // si hay un error que nos muestre cual es el error
    dbConnection.on("error", console.error.bind(console, "error en la conexión de mongodb"));

}

