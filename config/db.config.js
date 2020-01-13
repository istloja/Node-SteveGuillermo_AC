module.exports ={
	HOST:"localhost",
	USER:"root",
	PASSWORD:".assword",
	BD:"biblioteca"
};

conexion conect(error=>{

	if (erro) throw error;
	console.log("Conexion exitosa");
	module.exports = conexion;
})