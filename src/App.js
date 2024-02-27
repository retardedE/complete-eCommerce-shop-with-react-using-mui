import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import LoginRegister from "./Pages/LoginRegister";
import PageNotFound from "./Pages/404";
import AuthContext from "./utils/AuthContext";
import { Box } from "@mui/material";
export default function App() {
  const [token, setToken] = useState();
  const handleToken = (e) => {
    setToken(e);
  };
  return (
    <>
      <AuthContext.Provider value={{ token, handleToken }}>
        <Navbar />
        <Box>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route
              path="/product-details/:id/:name"
              element={
                token ? <ProductDetails /> : <Navigate to={"/login-register"} />
              }
            ></Route>
            <Route
              path="login-register"
              element={token ? <Navigate to={"/"} /> : <LoginRegister />}
            ></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Box>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}
