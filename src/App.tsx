import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { UserAdd } from "./pages/UserAdd/UserAdd";
import { UserEdit } from "./pages/UserEdit/UserEdit";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Details />} />
        <Route path="/" element={<UserAdd />} />
        <Route path="/" element={<UserEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
