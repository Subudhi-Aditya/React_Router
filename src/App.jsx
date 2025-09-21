import React from 'react'
import Navbar from './Component/Navbar'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './Component/ContactInfo'
import ContactForm from './Component/ContactForm'
import Notfound from './Component/Notfound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './Component/JobDetails'
import Error from './Component/Error'
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />} >
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route path=":id"  element={<JobDetails />} loader={jobDetailsLoader} />
        </Route>
        
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />

  )
}
