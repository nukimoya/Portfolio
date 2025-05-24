import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './generalpages/landingpage.jsx'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
