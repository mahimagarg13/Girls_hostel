import  React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Nav from "./Components/Navbar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery";
import Contactus from "./Components/Contactus";
import Services from "./Components/Services";
import Aboutus from "./Components/Aboutus";
import Copyright from "./Components/Copyright";
import Faq from "./Components/Faq";
import Error from "./Components/Error";

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
 <Route path="/" exact element={<Home />}></Route>
 <Route path="/gallery"  element={<Gallery />}></Route>
 <Route path="/contactus"  element={<Contactus />}></Route>
 <Route path="/services"  element={<Services />}></Route>
 <Route path="/aboutus"  element={<Aboutus />}></Route>
 <Route path="/faq"  element={<Faq />}></Route>
 <Route path="/error"  element={<Error/>}></Route>
 <Route path="/error"  element={<Error />}></Route>
      </Routes>
      <Footer />
      <Copyright />
    </BrowserRouter>
    </>
  );
}

export default App;
