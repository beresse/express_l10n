
const express = require('express');
const expressHandlebars = require('express-handlebars');
var translations = require('./translations.json')

const app = express();
const port = 8002;

app.engine('handlebars', expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static('public'));
app.listen(port, () => {
    console.log('bouya: ' + port);
});

app.get("/", (req, res) => {
    res.render("home", {
      langue: req.params.lang,
      langBonjour: "Bonjour, Dave comment ça va ?",
      img: "konexio-logo_1.png",
    });
  });


app.get("/:lang?", (req, res) => {
    switch (req.params.lang) {
      case "fr":
        res.render("home", {
          langue: req.params.lang,
          langBonjour: "Bonjour, ça va ?",
          img: "./img/france.png",
        });
        break;
      case "en":
        res.render("home", {
          langue: req.params.lang,
          langBonjour: "Hello, how are you?",
          img: "./img/uk.png",
        });
        break;
      case "es":
        res.render("home", {
          langue: req.params.lang,
          langBonjour: "Hola, ¿cómo estás?",
          img: "./img/es.png",
        });
        break;
        default:
        res.render("home");
    }
  });