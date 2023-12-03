import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import LandingView from "./LandingView";
import ExampleDataView from "./ExampleDataView";
import Footer from "./Footer";
import { useState } from 'react';



function App() {
  
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="exampledataview" element={<ExampleDataView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
