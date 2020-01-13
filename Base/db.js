const mysql= require("mysql");//importar la configuracion
const config= require("../"config/db.config.js);
const conexion = mysql.createConnection({
	host:config.HOST,
	user: config.USER,
	password: config.password,
	database: config.database
});