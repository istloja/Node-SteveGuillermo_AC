module.exports = app=>{
	
	const admin = require("./Controller/controlador.js");
	app.get("/obtenerAdmins",admin.getAll);
}