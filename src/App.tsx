import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Menu />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
