const Product = require('../models/product.model');

// const message = (req, res) => {
//   res.json("Hello World");
// };

const create = (req, res) => {
  Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(err => res.status(400).json(err));
};

const findAll =(req, res) => {
  Product.find()
    .then(products => res.status(201).json(products))
    .catch(err => res.status(400).json(err));
}

const findOne =(req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then(product => res.status(201).json(product))
    .catch(err => res.status(400).json(err));
}

module.exports = { create, findAll, findOne };