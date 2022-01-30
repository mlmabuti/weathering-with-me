// imports
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import express from "express";
import hbs from "hbs";

import geocode from "./utils/geocode.js";
import forecast from "./utils/forecast.js";

// setup dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // create express app

// create port for heroku
const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, "../public"); // create string path to public
const viewsPath = path.join(__dirname, "../templates/views"); // create string path to templates

app.set("view engine", "hbs"); // setup handlebars engine
app.set("views", viewsPath); //use custom path

app.use(express.static(publicDirectory)); // to serve static stuff in public directory

// routes
app.get("", (req, res) => {
  res.render("index", {
    // res.render is for template engines/ views
    title: "Weathering with me",
    name: "Axojolotl",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weathering with me",
    name: "Axojolotl",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "No address specified",
    });
  }

  geocode(req.query.address, (error, { lat, lon, loc: location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({ location, forecastData, address: req.query.address });
    });
  });
});

// app.get("/products", (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: "No search query",
//     });
//   }
//   console.log(req.query.search);
//   res.send({
//     products: [],
//   });
// });

// for subdirs of help that do not exist
// app.get("/help/*", (req, res) => {
//   res.render("404", {
//     title: "404",
//     errorMessage: "Help article not found.",
//     name: "Axojolotl",
//   });
// });

// for dirs that do not exist
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page Not Found",
    title: "404",
    name: "Axojolotl",
  });
});

// launch express app on port 3000
app.listen(port, () => {
  console.log("App is running.");
});
