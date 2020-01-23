const modelo = require("../Model/Admin.js");
exports.getAll = (req, res) => {
	console.log(req.body.idadmin);
	modelo.getAll((err, data) => {
		if (err)
			res.status(500).send({ mensaje: "No se pudo obtener los datos" });
		else (res).send(data);
	});

};

exports.crearNuevoAdmin = (req, res) => {
	const nuevoAdmin = new modelo({
		idadmin: req.body.idadmin,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		telefono: req.body.telefono,
		direccion: req.body.direccion,
		biblioteca_idbiblioteca: req.body.biblioteca_idbiblioteca,

	});
	modelo.crearNuevoAdmin(nuevoAdmin, (error, data) => {
		if (error) {
			res.status(500).send({ mensaje: "Ocurrio un error al crear el Admin" });
		} else {
			res.send(data);

		}
	});
}

exports.eliminarAdministradores = (req, res) => {

	modelo.eliminarAdministradores(req.body.idadmin, (error, data) => {
		if (error) {
			res.status(500).send({ mensaje: "Ocurrio un error al eliminar el Admin" });

		} else {
			res.send(data);
		}
	});
}

exports.actualizarAdministradores = (req, res) => {

	const idadmin = req.body.idadmin;
	const actualizarAdmin = new modelo(req.body);

	modelo.actualizarAdministradores(idadmin, actualizarAdmin, (error, data) => {

		if (error) {
			if (error.kind == "not_found") {
				res.status(400).send({ mensaje: "No se encontro eL Admin" });
			} else {

				res.status(500).send({ mensaje: "Ocurrio un error al actualizar el Admin" });
			}


		}
		else
			res.send(data);
	});
};


