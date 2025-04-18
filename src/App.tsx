import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
  const [items, setItems] = useState<[]>([]);

  async function getItems() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setItems(json);
      console.log(json);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products products={items} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
