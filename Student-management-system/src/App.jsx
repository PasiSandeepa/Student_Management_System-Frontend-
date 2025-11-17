import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Update from "./pages/Update";
import GetAll from "./pages/GetAll"
import Home from "./pages/Home";
import './App.css'; 





function App() {
  
  return (

    <>
    <NavBar />
    <h1>Student Management System</h1>
    <Routes>
         <Route path ="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/getAll" element={<GetAll />} />
      <Route path="/update" element={<Update />} />
      <Route path="/delete" element={<Delete />} />
    
    </Routes>

    
    </>
  );
}

export default App;