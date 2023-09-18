const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {rolGet, rolPost, rolPut, rolDelete} = require('../controllers/rol')

route.get('/', rolGet) //Listar Datos

route.post('/', rolPost) //Insertar Datos

route.put('/', rolPut) //Modificar Datos

route.delete('/', rolDelete) //Eliminar Datos

module.exports = route