import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/'); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark" style={{ padding: '0.5rem 1rem' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Ease Sell</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/categories/mobile-phones">
                    Mobile Phones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/cars">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/books">
                    Books
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/smart-watches">
                    Smart Watches
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categories/bikes">
                    Bikes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-3" role="search" style={{ flexBasis: '350px' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: '250px' }} // Reduced width
            />
            <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle" style={{ fontSize: '1.5rem' }}></i> {/* Reduced size */}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    User Profile
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">Track Orders</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">Post Status</a>
                </li>
              </ul>
            </li>
          </ul>
          <Link
            to="/sell"
            className="btn btn-warning ms-3"
            style={{
              fontSize: '1rem', // Reduced font size
              padding: '8px 16px', // Adjusted padding for a compact look
            }}
          >
            Sell
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
