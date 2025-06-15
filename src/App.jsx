import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Service from './pages/Service/Service';
import Blog from './pages/Blog/Blog'

function App() {

  let routers= 
  createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true, element:<Home/>},
      {path:'about', element:<About/>},
      {path:'contact', element:<Contact/>},
      {path:'service', element:<Service/>},
      {path:'blog', element:<Blog/>}
    ]}
   
  ])
  return <>
      <RouterProvider router={routers}/>
  </>
}

export default App
