import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Card from './Card';
import './Home.css'; // Import a CSS file for styling
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false); // State to track authorization
  const cards = Array(10).fill(null); // Create an array of 10 items

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      if (!token) {
        navigate('/'); // Redirect to login if no token
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/login/getuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token, // Use "auth-token" as required by your server
          },
        });

        if (response.ok) {
          const userData = await response.json(); // Parse user data from the response
          localStorage.setItem('name', userData.name); // Store name in localStorage
          localStorage.setItem('email', userData.email); // Store email in localStorage
          setIsAuthorized(true); // Mark as authorized
        } else {
          navigate('/'); // Redirect to login if not authorized
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        navigate('/'); // Redirect to login on error
      }
    };

    verifyToken();
  }, [navigate]);

  if (!isAuthorized) {
    return null; // Render nothing while checking authorization
  }

  return (
    <div>
      <Navbar />
      <div className="home-container">
        {cards.map((_, index) => (
          <Card key={index} /> // Render each card with a unique key
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
