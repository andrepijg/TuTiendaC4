const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre_tienda: { type: String, required: [false, 'Nombre Tienda obligatorio'], max:60 },
    telefono_tienda: { type: String, required: [false, 'Telefono Tienda obligatorio'], max:10 },
    direccion_tienda: { type: String, required: [false, 'dirección Tienda obligatorio'], max: 200 },
    email_tienda: { type: String, required: [false, 'Email Tienda obligatorio'], max: 70 },
    ciudad: { type: String, required: [false, 'ciudad Tienda obligatorio'], max: 20 },
    tipo_producto: { type: String, required: [false, 'Tipo de producto obligatorio'], max: 40 },
    nombre_producto: { type: String, required: [false, 'Nombre Producto obligatorio'], max: 40 },
    precio_kg: { type: String, required: [false, 'Precio Producto obligatorio'], max: 10 },
    url_img:  {type: String, max: 200}
});

//Convertir a Modelo

module.exports = mongoose.model('Productos',ProductosSchema);

