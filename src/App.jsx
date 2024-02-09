import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DaftarUser from "./pages/Admin/DaftarUser";
import Layout from "./components/Layout";
import Require from "./components/Require";
import Home from "./pages/Users/Home";
import UserProfile from "./pages/Users/UserProfile";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Routes */}
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<Error404 />} />

        {/* Restricted Admin */}
        <Route element={<Require allowedID={[1]} />}>
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/dashboard/daftar-user' element={<DaftarUser />} />
        </Route>
        <Route element={<Require />}>
          <Route path='/home' element={<Home />} />
          <Route path='/user-profile' element={<UserProfile />} />
        </Route>

        {/* Restricted Admin / User */}
      </Route>
    </Routes>
  );
}

export default App;
