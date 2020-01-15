const mysql =require("../Base/db.js")
const admin = function(Admin){
	this.idadmin= Admin.idadmin;
	this.nombre=Admin.nombre;
	this.apellido=Admin.apellido;
	this.telefono=Admin.telefono;
	this.direccion=Admin.direccion;
	this.biblioteca_idbiblioteca=Admin.biblioteca_idbiblioteca;

};
admin.getAll = result =>{

	mysql.query("SELECT * FROM admin",(err,res)=>{
		if (err){
			console.log(error,"error consulta");
			result(null,error);
			return; 
		}
		console.log(res);		
		result(null,res);
});
};
module.exports = admin;