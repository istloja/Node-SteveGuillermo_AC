const mysql= require("mysql");//importar la configuracion
const config= require("../config/db.config.js");
const conexion = mysql.createConnection({
	host:config.HOST,
	user: config.USER,
	password: config.PASSWORD,
	database: config.BD,
});
conexion.connect(error=>{
  if (error) throw error;
  console.log("conexion exitosa");
});
module.exports = conexion;