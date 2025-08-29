// src/App.js
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.scss";
import "./App.scss";

import AuthProvider from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import DishDetail from "./pages/DishDetail";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";      // 파일명이 SignUp.jsx 맞는지 확인
import SearchPage from "./pages/SearchPage";

// 대륙 메뉴 클릭 시 홈으로(필요시 추후 교체)
function ContinentRedirect() {
  return <Navigate to="/" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:key" element={<ContinentRedirect />} />
        <Route path="/country/:name" element={<CountryPage />} />
        <Route path="/dish/:id" element={<DishDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}
