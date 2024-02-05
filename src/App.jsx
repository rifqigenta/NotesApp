import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DaftarUser from "./pages/Admin/DaftarUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='/admin-dashboard' Component={AdminDashboard} />
          <Route path='/admin-dashboard/daftar-user' Component={DaftarUser} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
