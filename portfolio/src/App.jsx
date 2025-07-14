import React from 'react'
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import LandingPage from './generalpages/landingpage.jsx'
import { initEmailJS } from '../emailconfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    initEmailJS();
  }, []);

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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
