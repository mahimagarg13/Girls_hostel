import  React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Nav from "./Components/Navbar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery";
import Contactus from "./Components/Contactus";

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
 <Route path="/" exact element={<Home />}></Route>
 <Route path="/gallery"  element={<Gallery />}></Route>
 <Route path="/contactus"  element={<Contactus />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
