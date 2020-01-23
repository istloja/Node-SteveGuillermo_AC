const modelo = require ("../Model/Admin.js");
exports.getAll = (req,res) =>{
	console.log(req.body.idadmin);
	modelo.getAll((err,data)=>{
		if(err)
			res.status(500).send({mensaje:"No se pudo obtener los datos"});
		else (res).send(data);
	});

};

exports.crearNuevoAdmin =(req,res)=>{
	const nuevoAdmin = new modelo({
	idadmin: req.body.idadmin,
	nombre: req.body.nombre,
	apellido: req.body.apellido,
	telefono: req.body.telefono,
	direccion: req.body.direccion,
	biblioteca_idbiblioteca: req.body.biblioteca_idbiblioteca,

});
modelo.crearNuevoAdmin(nuevoAdmin,(error,data)=>{
	if(error){
			res.status(500).send({mensaje:"Ocurrio un error al crear el Admin"});
		}else{ 
			res.send(data);
	
		}
	});
}

exports.eliminarAdministradores = (req,res)=>{
	
modelo.eliminarAdministradores(req.body.idadmin,(error,data)=>{
		if (error) {
			res.status(500).send({mensaje:"Ocurrio un error al eliminar el Admin"});

		}else{
			res.send(data);
		}
	});
}