import './App.css'
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
 
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App;