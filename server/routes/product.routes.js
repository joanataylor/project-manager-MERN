// const PersonController = require('../controllers/person.controller');

const { create, findAll, findOne, updateOne } = require("../controllers/product.controller");

const express = require("express");
// const { findOne } = require("../models/product.model");
const productRouter = express.Router();

// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }
// productRouter
//   .route("/")
//   .get(message);

productRouter
  .route("/products")
  .post(create)
  .get(findAll)

productRouter
  .route("/products/:id")
  .get(findOne)
  .put(updateOne);

module.exports = productRouter;
