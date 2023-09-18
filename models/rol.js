const {Schema, model} = require('mongoose')

const RolSchema = Schema({
    idRol: {
        type: Number,
        unique: true,
        required: [true, 'El idRol es obligatorio']
    },
    rol: {
        type: String,
        default: true,
        required: [true, 'El Rol es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    }
})

//Exportar la función UsuarioSchema
module.exports = model('Rol',RolSchema)
/*
{
    "documento": "1023625297",
    "nombre": "Emanuel Zapata",
    "direccion": "Calle 77C #91-44",
    "telefono": "3054070574",
    "correo": "emanuelzpx@gmail.com",
    "estado": true
    } 
    */