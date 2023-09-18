const {response} = require('express')

//Importación de los modelos
const Rol = require('../models/rol')

//Método GET de la API
const rolGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los usuarios
    const roles = await Rol.find()

    res.json({  //Respuesta en JSON
        roles
    })   
}

//Método POST de la api
const rolPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const rol = new Rol(body) //Instanciando el objeto
        await rol.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const rolPut = async(req, res = response) => {

    const {idRol,rol,estado} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Rol.findOneAndUpdate({idRol:idRol}, 
            {rol:rol, estado:estado})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const rolDelete = async(req, res) => {

    const {_id} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const rol = await Rol.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    rolGet,
    rolPost,
    rolPut,
    rolDelete
}