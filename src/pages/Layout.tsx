// pages/Layout.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="hover:text-gray-300 transition text-xl font-bold"
        >
          Genericc
        </Link>
        <nav className="space-x-4">
          <Link to="/products" className="hover:text-gray-300 transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-gray-300 transition">
            Cart
          </Link>
        </nav>
      </header>

      <main className="flex-grow px-6 py-8 bg-gray-50">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Genericc. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
