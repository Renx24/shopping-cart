import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

function App() {
  const [items, setItems] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  async function getItems() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setItems(json);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  function addToCart(product: Product) {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.filter((item) => item.id !== product.id); // Remove if already in cart
      }
      return [...prevCart, product]; // Add to cart
    });
  }

  function removeFromCart(productId: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  return (
    <BrowserRouter basename="/shopping-cart">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={
              <Products products={items} cart={cart} addToCart={addToCart} />
            }
          />
          <Route
            path="cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
