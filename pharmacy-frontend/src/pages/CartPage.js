import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    // Show popup message
    alert("✅ Checkout successful! Thank you for your purchase.");

    // Clear the cart
    clearCart();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "1rem",
                }}
              >
                <strong>{item.name}</strong> – ${Number(item.price).toFixed(2)}
                <button
                  style={{
                    marginLeft: "1rem",
                    color: "red",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "2rem" }}>
            <button
              onClick={handleCheckout}
              style={{
                background: "#28a745",
                color: "white",
                padding: "0.7rem 1.5rem",
                borderRadius: "5px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
