const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    item: String,
    // isComplete: Boolean,
    price: String,
    description: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;