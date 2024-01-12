const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Ola " + req.params.nome + " Seu cargo e: " + req.params.cargo);
})

app.listen(8081, function(){
    console.log("Servidor rodando na url https://localhost:8081")
})
