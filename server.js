const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
	console.log(req);
	res.json({mensaje:"Hola mundo ya programo en Node JS"});
});

app.get("/hola/es",(req,res)=>{
//	console.log(req);
	req.json({mensaje:"Hola mundo"})
});

app.get("/hola/en",(req,res)=>{
//	console.log(res);
	res.json({mensaje:"Hello world"})
});


require("./servicios.js")(app);


app.listen(1234,()=>{

	console.log("Servidor iniciado");
});
