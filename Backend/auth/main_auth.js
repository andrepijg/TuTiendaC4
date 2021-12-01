const jwt = require ("jsonwebtoken")

const auth = (req, res, next) => {// esto es para verificar que el token tenga permisos
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "__secret__")
        req.usuario = decoded
        next()

    }catch(error){
        res.status(401)
        res.json({
            code: 4, msg: "no tienes permiso para acceder"
        })
    }
}

module.exports = auth