import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import React from 'react';
import Layout from "../src/Components/Layout/Layout";
import Home from "../src/Components/Home/Home.jsx";
import Giving from "../src/Components/Giving/Giving.jsx";
import AboutUs from "../src/Components/AboutUs/AboutUs.jsx";
import ContactUs from "../src/Components/ContactUs/ContactUs.jsx";
import Ministries from "../src/Components/Ministries/Ministries.jsx";
import Schedule from "../src/Components/Schedule/Schedule.jsx";
import WatchLive from "../src/Components/WatchLive/WatchLive.jsx";


let routers = createBrowserRouter([
  {path: '*' , element: <Home/>},
    {path: '/', element:<Layout/> , children:[
    {path: 'Home' , element: <Home/>},
    {path: 'AboutUs' , element: <AboutUs/>},
    {path: 'ContactUs' , element: <ContactUs/>},
    {path: 'Giving' , element: <Giving/>},
    {path: 'Ministries' , element: <Ministries/>},
    {path: 'Schedule' , element: <Schedule/>},
    {path: 'WatchLive' , element: <WatchLive/>},
  ]}
])

export default function App() {
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}



