const express = require("express");
const router = express.Router();
const tiendasController = require("../controllers/tiendas.controller");

router.get("/", tiendasController.obtenerTiendas);

module.exports = router;