// pages/Layout.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ height: "100vh", width: "100vw" }}
    >
      <header
        className="text-white px-6 py-4 flex justify-between items-center bg-white shadow-md"
        style={{ position: "sticky", top: 0, zIndex: 10 }}
      >
        <Link
          to="/"
          className="hover:text-gray-300 transition text-xl font-bold"
        >
          <img src="./src/assets/logo.png" alt="Logo" className="h-12" />
        </Link>
        <nav className="space-x-4">
          <Link
            to="/products"
            className="hover:text-gray-400 text-gray-800 transition"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-400 text-gray-800 transition"
          >
            Cart
          </Link>
        </nav>
      </header>

      <main className="flex-grow px-6 py-8 bg-gray-50">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
