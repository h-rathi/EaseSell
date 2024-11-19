import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Profile.css'; // Add a custom CSS file for styling

function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const [userOrders, setUserOrders] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    setUserData({ name, email });

    // Fetch user orders and posts from the server (use your API endpoints)
    const fetchUserData = async () => {
      // Simulated data for demonstration. Replace with actual API calls.
      setUserOrders([
        { id: 1, item: 'Laptop', status: 'Dispatched' },
        { id: 2, item: 'Headphones', status: 'Delivered' },
        { id: 3, item: 'Mobile Phone', status: 'Processing' },
      ]);

      setUserPosts([
        { id: 1, product: 'Tablet', status: 'Approved' },
        { id: 2, product: 'Smartwatch', status: 'Pending Approval' },
        { id: 3, product: 'Camera', status: 'Rejected' },
      ]);
    };

    fetchUserData();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <h1>Welcome, {userData.name}</h1>
          <p>Email: {userData.email}</p>
        </div>

        <div className="profile-section">
          <h2>Your Orders</h2>
          <table className="profile-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Item</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.item}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="profile-section">
          <h2>Your Posts</h2>
          <table className="profile-table">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Product</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.product}</td>
                  <td>{post.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="profile-links">
          <Link to="/home" className="btn btn-primary">Back to Home</Link>
          <Link to="/orders" className="btn btn-secondary">View All Orders</Link>
          <Link to="/posts" className="btn btn-success">View All Posts</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
