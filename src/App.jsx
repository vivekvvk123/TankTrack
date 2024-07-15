import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Logs from "./components/Logs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CameraCapture from "./components/CameraCapture";
function App() {
  
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home />
  //   },
  //   {
  //     path:"/dashboard",
  //     element:<Dashboard />
  //   },
  //   {
  //     path:"/registration",
  //     element:<Registration />
  //   },
  //   {
  //     path:"/logs",
  //     element:<Logs />
  //   },
  //   {
  //     path:"/contact",
  //     element:<Contact />
  //   }
  // ])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cam" element={<CameraCapture />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
