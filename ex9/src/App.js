import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Header";

import LandingView from "./LandingView";
import ExampleDataView from "./ExampleDataView";
import ContactView from "./ContactView";
import AboutView from "./AboutView";
import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route index element={<LandingView />} />
          <Route path="Exampledataview" element={<ExampleDataView />}></Route>
          <Route path="ContactView" element={<ContactView />}></Route>
          <Route path="AboutView" element={<AboutView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
