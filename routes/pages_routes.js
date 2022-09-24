var express = require("express");
var route = express.Router();

var users = [];

route.get("/", (req, res) => {
    res.render(__dirname + "/../views/pages/form.ejs");
});

route.get("/welcome", (req, res) => {
    res.render(__dirname + "/../views/pages/welcome.ejs");
});

route.get("/users", (req, res) => {
    res.render(__dirname + "/../views/pages/users.ejs", { users: users });
});

//Traitement
route.post("/form", (req, res) => {
    console.log(req.body);

    let user = req.body;
    user.id = users.length + 1;
    if (user) {
        users.push(user);
        res.redirect("/users");
    } else res.redirect("/");
});

module.exports = route;