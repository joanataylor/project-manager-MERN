const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: [true, 'Product is required']
    },
    price: {
      type: String,
      required: [true, 'Price is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;