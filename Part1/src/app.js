const path = require("node:path");
const express = require("express");
const products = require("./data/products");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  const rankedProducts = [...products].sort((a, b) => a.rank - b.rank);

  res.status(200).render("index", {
    title: "SaaS Growth Listicle",
    products: rankedProducts
  });
});

app.get("/products/:slug", (req, res) => {
  const product = products.find(({ slug }) => slug === req.params.slug);

  if (!product) {
    return res.status(404).render("404", {
      title: "Product Not Found",
      message: "The requested product could not be found."
    });
  }

  return res.status(200).render("product", {
    title: `${product.name} Growth Teardown`,
    product
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found",
    message: "The requested page could not be found."
  });
});

module.exports = app;
