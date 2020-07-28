const express = require("express");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers/burgers");

const PORT = process.env.PORT || 8080;

const app = express();

// Handlebars options
const hbOptions = {
  defaultLayout: "main",
  layoutsDir: "src/views/layouts",
  partialsDir: "src/views/partials",
};

// Serve static content for the app from "public" folder
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up express handlebars
app.engine("handlebars", expressHandlebars(hbOptions));
app.set("view engine", "handlebars");

// Import routes and allow server access
app.use(routes);

// Start the server and begin listening for client requests
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
