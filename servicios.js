module.exports = app => {

	const admin = require("./Controller/controlador.js");

	app.post("/obtenerAdmins", admin.getAll);
	app.post("/crearNuevoAdmin", admin.crearNuevoAdmin);
	app.post("/eliminarAdministradores", admin.eliminarAdministradores);
	app.post("/actualizarAdministradores", admin.actualizarAdministradores);

}