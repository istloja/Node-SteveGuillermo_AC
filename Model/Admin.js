const mysql = require("../Base/db.js")
const admin = function (Admin) {
	this.idadmin = Admin.idadmin;
	this.nombre = Admin.nombre;
	this.apellido = Admin.apellido;
	this.telefono = Admin.telefono;
	this.direccion = Admin.direccion;
	this.biblioteca_idbiblioteca = Admin.biblioteca_idbiblioteca;

};
admin.getAll = result => {

	mysql.query("SELECT * FROM admin", (err, res) => {
		if (err) {
			console.log(error, "error consulta");
			result(null, error);
			return;
		}
		//console.log(res);		
		result(null, res);
	});
};

admin.crearNuevoAdmin = (nuevoAdmin, result) => {

	mysql.query("INSERT INTO admin SET ?", nuevoAdmin, (error, res) => {

		if (error) {
			console.log(error, "error al crear el admin");
			result(null, error);
			return;
		}
		else {
			result(null, res);
		}
	});
};

admin.eliminarAdministradores = (eliminarAdmin, result) => {

	mysql.query("DELETE FROM admin WHERE idadmin = ?", eliminarAdmin, (error, res) => {
		if (error) {
			console.log(error, "error al eliminar el admin seleccionado");
			result(null, error);
			return;
		}
		else {
			result(null, res);
		}
	});
}

admin.actualizarAdministradores = (idadmin, actualizarAdmin, result) => {

	mysql.query("UPDATE admin set nombre=? , apellido =? direccion = ? , telefono = ?, biblioteca_idbiblioteca =? WHERE idadmin = ? ",

		[actualizarAdmin.nombre, actualizarAdmin.apellido, actualizarAdmin.direccion,
		actualizarAdmin.telefono, actualizarAdmin.biblioteca_idbiblioteca, idadmin], (error, res) => {

			if (error) {
				console.log(error, "error al actualizar  el admin seleccionado");
				result(null, error);
				return;
			}
			else {
				if (res.affectedRows == 0) {
					result({ kind: "not_found" }, null);
				}
				else {
					result(null, res)
				}
			}
		});
};


module.exports = admin;