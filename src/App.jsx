import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar"
import Employees from "./pages/Employees";
import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";



const App = () => {
  return (
    <div className="flex gap-6">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </div>
  );
};

export default App;
