const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: [true, 'Item is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    isComplete: Boolean,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;