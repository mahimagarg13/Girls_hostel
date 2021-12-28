import  React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Nav from "./Components/Navbar/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
 <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
