
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav className="flex justify-center text-center items-center text-xl gap-8">
        <NavLink className="" to="/">Home</NavLink>
        <NavLink className="" to="/about">About</NavLink>
        <NavLink className="" to="/login">Login</NavLink>
      </nav>
    </div>
  )
}

export default Navbar