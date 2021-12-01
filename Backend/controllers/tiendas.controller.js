const Productos = require('../models/productos.models');

exports.obtenerTiendas = async (req, res) => {
    try {
        const tiendas = await Productos.aggregate([{
            $group: {
                _id: {
                    nombre_tienda: "$nombre_tienda",
                    telefono_tienda: "$telefono_tienda",
                    email_tienda: "$email_tienda",
                    direccion_tienda: "$direccion_tienda",
                    ciudad: "$ciudad"
                }
            }
        }])
        res.json(tiendas)
    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}

