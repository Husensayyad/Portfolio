import { useState, useEffect } from "react";
import NavBar from "./componant/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./componant/Home/Home";
import About from "./componant/About/About";
import Resume from "./componant/Resume/Resume";
import Projects from "./componant/Projects/Projects";
import Contact from "./componant/Contact/Contact";
import Footer from "./componant/Footer";
// import Preloader from "./componant/Pre";
// import ScrollToTop from "./componant/ScrollToTop";
function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 1200);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* {load && <Preloader load={load} />} */}
        <div
          className="App text-white"
          id={load ? "no-scroll" : "scroll"}
        ></div>
        <NavBar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
