const ProductModel = require("../schemes/products.schema");
const { v4 } = require("uuid");
const controller = {};

//coger:

controller.getProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(500).send({ error: "Error al leer el archivo" });
  }
};

//añadir:

controller.addProduct = async (req, res) => {
  console.log("Works");
  const { name, price, category, size } = req.body;

  const newProduct = new ProductModel({
    _id: v4(),
    name,
    price,
    category,
    size,
  });

  await newProduct.save();

  res.send("Product saved");
};

//borrar:

controller.deleteProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.did);

  if (!product) {
    return res.status(409).send("product dont exist");
  }

  await ProductModel.deleteOne({ _id: product.id });
  res.send("product deleted");
};

//editar:

controller.editProduct = async (req, res) => {
  const product = await ProductModel.findById();

  if (!product) {
    return res.status(409).send("Users dont exist");
  }
  await productModel.updateOne({ _id: product.id }, {});
  await product.save();
  res.send("User editeed");
};

module.exports = controller;
