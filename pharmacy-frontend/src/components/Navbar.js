import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { currentUser, logout } = useAuth();

  const cartCount = cartItems.length;

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully.");
      navigate("/login");
    } catch (err) {
      alert("Failed to logout");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => navigate("/")}>
        <h2 className="logo">🧪 WANTAM</h2>
      </div>

      <div className="navbar-right">
        <Link to="/upload-prescription" className="nav-link">
          Upload Prescription
        </Link>

        <div className="cart-icon-wrapper">
          <Link to="/cart" className="nav-link">
            🛒
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </Link>
        </div>

        {currentUser ? (
          <button
            onClick={handleLogout}
            className="nav-button"
            style={{ cursor: "pointer" }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
