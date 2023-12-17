// NICK MCCULLOUGH - TEAM29 - SOLO DEVELOPMENT

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Data = require("./DataSchema");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// connect with mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/fakestore_catalog")
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) =>
    console.error("Error connecting to MongoDB. See error:", err)
  );

// ----- CRUD Operations -----

////////////////////////////////
// ---------- GET ---------- //
////////////////////////////////

// GET single product -- CONFIRMED WORKS IN POSTMAN
app.get("/products/:id", async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const product = await Data.findOne({ id: productId });

    if (!product) {
      return res.status(404).json({ message: "Unable to find product." });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching product", error });
  }
});

// GET all products -- CONFIRMED WORKS IN POSTMAN
app.get("/products", async (req, res) => {
  try {
    const products = await Data.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

////////////////////////////////
// ---------- POST ---------- //
////////////////////////////////

// CONFIRMED WORKS IN POSTMAN using JSON format:
/*
{
    "id": 21,
    "title": "blah blah blah",
    "price": 1000000.00,
    "description": "blahhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    "category": "blahhh blahh",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
  */
  app.post("/products", async (req, res) => {
    try {
      const newProduct = new Data(req.body);
      const result = await newProduct.save();
      res.status(201).json({ 
        message: "Product successfully added to catalog", 
        product: result 
      });
    } catch (error) {
      console.error('Error adding new product:', error);
      res.status(500).json({ message: "Error adding new product", error });
    }
  });
  

////////////////////////////////
// ---------- PUT ---------- //
////////////////////////////////

// CONFIRMED WORKS IN POSTMAN using JSON format (price updating)
// http://localhost:5000/products/14/price
/* {
   "price": 999.99
} */
app.put("/products/:id/price", async (req, res) => {
  const { price } = req.body;
  const productId = req.params.id;

  if (isNaN(parseFloat(price))) {
    return res.status(400).json({ error: "Incorrect Price Provided." });
  }

  try {
    const updatedProduct = await Data.findOneAndUpdate(
      { id: productId },
      { price: price },
      { new: true, runValidators: true }
    ).orFail();

    res.json(updatedProduct);
  } catch (error) {
    if (error.name === "DocumentNotFoundError") {
      return res.status(404).json({ error: "Unable to find product." });
    }
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//////////////////////////////////
// ---------- DELETE ---------- //
//////////////////////////////////

// CONFIRMED WORKS IN POSTMAN
// http://localhost:5000/products/21
app.delete("/products/:id", async (req, res) => {
  const productId = parseInt(req.params.id, 10);

  try {
    const result = await Data.findOneAndDelete({ id: productId });
    if (result) {
      res
        .status(200)
        .json({ message: `Item ${productId} successfully deleted.` });
    } else {
      res
        .status(404)
        .send({ message: `Product with ID ${productId} not found` });
    }
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
