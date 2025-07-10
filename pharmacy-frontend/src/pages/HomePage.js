// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./HomePage.css";
import { useCart } from "../context/CartContext";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();


  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (!products.length) {
    return <div className="no-products">No products available.</div>;
  }

  return (
    <div className="homepage">
      <h1>Available Products</h1>
      <div className="products-grid">
        {products.map(({ id, name, description, price, imageUrl }) => (
          <div key={id} className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">${Number(price).toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart({ id, name, price, imageUrl })}>
                Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
