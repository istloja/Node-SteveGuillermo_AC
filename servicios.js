module.exports = app=>{
	
	const admin = require("./Model/Admin.js");
	app.post("obtenerAdmins",admin.getAll);
}