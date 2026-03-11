import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Solution from './pages/Solution'
import Services from './pages/Services'
import Company from './pages/Company'
import Carreers from './pages/Carreers'
import Partners from './pages/Partners'
import { Home } from "./pages/Home"
import Product from './pages/Product'
import { Footer } from './components/Footer'
import SignIn from './pages/SignIn'
import ProductDetail from './pages/ProductDetail'
import JobDetails from './pages/JobDetails'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'

// ── Wrapper to use location outside Routes ──
function AppWrapper() {
  const location = useLocation()
  const isAdmin = location.pathname === "/admin-dashboard" // check if admin page

  return (
    <>
      {/* Render NavBar only if NOT on admin page */}
      {!isAdmin && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/services' element={<Services />} />
        <Route path='/company' element={<Company />} />
        <Route path='/careers' element={<Carreers />} />
        <Route path='/partner' element={<Partners />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productdetails' element={<ProductDetail />} />
        <Route path="/job/:id" element={<JobDetails />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer can stay or you can hide it for admin too */}
      {!isAdmin && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}