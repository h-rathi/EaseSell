const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, // Reference to the user who is selling the product
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Price should not be negative
    },
    category: {
      type: String,
      required: true,
      enum: ['Electronics', 'Vehicles', 'Books', 'Home Appliances', 'Fashion', 'Others'], // Example categories
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    status: {
      type: String,
      default: 'Pending Approval', // Initial status of the product
      enum: ['Pending Approval', 'Approved', 'Rejected'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

module.exports = mongoose.model('Product', ProductSchema);
