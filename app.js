const express = require('express');

//Creation de l'instance du serveur
const app = express();

//
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definition du port d'ecoute du serveur
let port = 9000;
app.listen(port, () => {
    console.log("Serveur is running on port ", port);
});

//Creation et Definition des routes
let page_routes = require("./routes/pages_routes")
app.use("/", page_routes);




