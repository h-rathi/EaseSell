import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Sell.css';

function Sell() {
  const [productDetails, setProductDetails] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
  });

  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., API call)
    console.log('Product Details:', productDetails);
    console.log('Uploaded Images:', images);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <div className="sell-container">
        <h1 className="sell-header">Sell Your Product</h1>
        <form className="sell-form" onSubmit={handleSubmit}>
          {/* Product Title */}
          <div className="form-group">
            <label htmlFor="title">Product Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={productDetails.title}
              onChange={handleInputChange}
              placeholder="Enter product title"
              required
            />
          </div>

          {/* Product Description */}
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={productDetails.description}
              onChange={handleInputChange}
              placeholder="Enter detailed product description"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Product Price */}
          <div className="form-group">
            <label htmlFor="price">Price (USD)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productDetails.price}
              onChange={handleInputChange}
              placeholder="Enter product price"
              required
            />
          </div>

          {/* Product Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={productDetails.category}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="books">Books</option>
              <option value="vehicles">Vehicles</option>
              <option value="home-appliances">Home Appliances</option>
            </select>
          </div>

          {/* Product Images */}
          <div className="form-group">
            <label htmlFor="images">Product Images</label>
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageUpload}
            />
            <div className="image-preview">
              {images.map((image, index) => (
                <div key={index} className="image-thumbnail">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Product"
                    className="preview-img"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-submit">
            Submit Product
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Sell;
