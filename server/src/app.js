const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/products.routes");
require("dotenv").config();

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Uso de rutas
app.use("/api/products", productsRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("conected to database");
  } catch (err) {
    console.error("Connection error");
  }
};

app.listen(process.env.PORT, () =>
  console.log("Servidor en ejecución en el puerto " + process.env.PORT)
);

startServer();
