import { useState } from 'react'
import './App.css'
import "./server"
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader, loader as vansLoader } from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import Layout from './components/Layout'
import HostDashboard from './pages/Host/HostDashboard'
import HostIncome from './pages/Host/HostIncome'
import HostReviews from './pages/Host/HostReviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import { loader as vanDetailLoader } from './pages/Vans/VanDetail'
import { loader as hostVansLoader } from './pages/Host/HostVans'
import { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail'
import { requireAuth } from './utils'
import Login from './pages/Login'
import { loader as loginLoader } from './pages/Login'
import { action as loginAction } from './pages/Login'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} action={loginAction} />
    <Route path='vans' element={<Vans />} errorElement={<Error />} loader={vansLoader} />
    <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />
    <Route path='host' element={<HostLayout />} >
      <Route
        index 
        element={<HostDashboard />}
        // loader={async () => await requireAuth()} 
      />
      <Route path='income' element={<HostIncome />} />
      <Route path='reviews' element={<HostReviews />} />
      <Route path='vans' element={<HostVans />} loader={hostVansLoader}/>
      <Route path='vans/:id' element={<HostVanDetail />} loader={hostVanDetailLoader}>
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {

  return (
    <>

    <RouterProvider router={router} />

      {/* The below syntax does not support the new Loaders functionality of React Router v6      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />
            <Route path='host' element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path='income' element={<HostIncome />} />
              <Route path='reviews' element={<HostReviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
