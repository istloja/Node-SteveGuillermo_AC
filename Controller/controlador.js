const modelo = require ("../Model/Admin.js");
exports.getAll = (req,res) =>{
	modelo.getAll((err,data)=>{
		if(err)
			res.status(500).send({mensaje:"No se pudo obtener los datos"});
		else (res).send(data);
	});

};