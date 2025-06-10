import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Capabilities from './pages/Capabilities';
import Approach from './pages/Approach';
import Inquiries from "./pages/inquiries";
import Users from "./pages/users";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useAuth } from './context/AuthContext';
import AdminDashboard from './pages/AdminDashboard';



function App() {
  const { currentUser } = useAuth(); 
  const isAdmin = currentUser?.role === 'admin';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        <Route path="/admin/inquiries" element={<Inquiries />} />
         <Route path="/admin/users" element={<Users />} />
          <Route path="approach" element={<Approach />} />
          <Route path="projects" element={<Projects />} />
            <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users" element={<Users />} />
 
          <Route path="capabilities" element={<Capabilities />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Redirect unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;