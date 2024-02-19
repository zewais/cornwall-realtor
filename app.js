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
    listingsDowntown.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/gm, "")) -
        Number(b.price.replace(/[^0-9]/gm, ""))
    );
  } else if (sort === "descendingly") {
    listingsDowntown.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/gm, "")) -
        Number(a.price.replace(/[^0-9]/gm, ""))
    );
  }
  response.render("neighborhoodView", {
    list: listingsDowntown,
    neighborhood: "Downtown",
  });
});

app.get("/northend", (request, response) => {
  const listingsNorthend = listings.northend;
  const { sort } = request.query;

  if (sort === "ascendingly") {
    listingsNorthend.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/gm, "")) -
        Number(b.price.replace(/[^0-9]/gm, ""))
    );
  } else if (sort === "descendingly") {
    listingsNorthend.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/gm, "")) -
        Number(a.price.replace(/[^0-9]/gm, ""))
    );
  }
  response.render("neighborhoodView", {
    list: listingsNorthend,
    neighborhood: "Northend",
  });
});

app.get("/eastend", (request, response) => {
  const listingsEastend = listings.eastend;
  const { sort } = request.query;

  if (sort === "ascendingly") {
    listingsEastend.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/gm, "")) -
        Number(b.price.replace(/[^0-9]/gm, ""))
    );
  } else if (sort === "descendingly") {
    listingsEastend.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/gm, "")) -
        Number(a.price.replace(/[^0-9]/gm, ""))
    );
  }
  response.render("neighborhoodView", {
    list: listingsEastend,
    neighborhood: "Eastend",
  });
});

app.get("/riverdale", (request, response) => {
  const listingsRiverdale = listings.riverdale;
  const { sort } = request.query;

  if (sort === "ascendingly") {
    listingsRiverdale.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/gm, "")) -
        Number(b.price.replace(/[^0-9]/gm, ""))
    );
  } else if (sort === "descendingly") {
    listingsRiverdale.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/gm, "")) -
        Number(a.price.replace(/[^0-9]/gm, ""))
    );
  }
  response.render("neighborhoodView", {
    list: listingsRiverdale,
    neighborhood: "Riverdale",
  });
});

app.get("/downtown/:id", (request, response) => {
  const { id } = request.params;
  const listing = listings.downtown.find((list) => list.id == id);
  response.render("listingView", { listing });
});

app.get("/northend/:id", (request, response) => {
  const { id } = request.params;
  const listing = listings.northend.find((list) => list.id == id);
  response.render("listingView", { listing });
});

app.get("/eastend/:id", (request, response) => {
  const { id } = request.params;
  const listing = listings.eastend.find((list) => list.id == id);
  response.render("listingView", { listing });
});

app.get("/riverdale/:id", (request, response) => {
  const { id } = request.params;
  const listing = listings.riverdale.find((list) => list.id == id);
  response.render("listingView", { listing });
});
