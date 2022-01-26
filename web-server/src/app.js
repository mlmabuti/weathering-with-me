// imports
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import express from "express";
import hbs from "hbs";

// setup dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // create express app

const publicDirectory = path.join(__dirname, "../public"); // create string path to public
const viewsPath = path.join(__dirname, "../templates/views"); // create string path to templates
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs"); // setup handlebars engine
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory)); // to serve static stuff in public directory

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

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weathering with me",
    name: "Axojolotl",
    message: "This is a help message.",
  });
});

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

// for subdirs of help that do not exist
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found.",
    name: "Axojolotl",
  });
});

// for dirs that do not exist
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page Not Found",
    title: "404",
    name: "Axojolotl",
  });
});

// launch express app on port 3000
app.listen(3000, () => {
  console.log("App is running.");
});
