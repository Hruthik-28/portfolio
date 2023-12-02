import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements , RouterProvider, Route } from 'react-router-dom'
import {Home, Work, About, Contact} from './pages/index.js'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)