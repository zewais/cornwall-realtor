//Imports
const express = require("express");
const { request, response } = require("http");
const listings = require("./data/listings");

//Initializers
const app = express();
const port = 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(port, () => console.log(`Listening on port ${port}`));

//routes
app.get("/downtown", (request, response) => {
  const listingsDowntown = listings.downtown;
  const { sort } = request.query;

  if (sort === "ascendingly") {
    listingsDowntown.sort((a, b) => a.price - b.price);
  } else if (sort === "descendingly") {
    listingsDowntown.sort((a, b) => b.price - a.price);
  }
  console.log(listingsDowntown[0].price);
  response.render("neighborhoodView", {
    list: listingsDowntown,
    neighborhood: "Downtown",
  });
});

app.get("/northend", (request, response) => {
  response.render("neighborhoodView", { listings, neighborhood: "Northend" });
});

app.get("/eastend", (request, response) => {
  response.render("neighborhoodView", { listings, neighborhood: "Eastend" });
});

app.get("/riverdale", (request, response) => {
  response.render("neighborhoodView", { listings, neighborhood: "Riverdale" });
});

app.get("/downtown/:id", (request, response) => {
  response.send("downtown");
});

app.get("/northend/:id", (request, response) => {
  response.send("downtown");
});

app.get("/eastend/:id", (request, response) => {
  response.send("downtown");
});

app.get("/riverdale/:id", (request, response) => {
  response.send("downtown");
});
