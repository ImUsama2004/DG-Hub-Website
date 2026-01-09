import React from 'react'
import { Link, useNavigate} from "react-router-dom"
import { ArrowRight, Terminal } from "lucide-react";

const navigate = useNavigate
// const handleClick = ()=>{
//   navigate('/')
// }
const navItems = [
    // { name: "home", path:"/" },
    { name: "solution", path:"/solution" },
    { name: "services", path:"/services" },
    { name: "company", path:"/company" },
    { name: "partner", path:"/partner" },
    { name: "careers", path:"/careers" },
    { name: "contact", path:"/contact" },
]
function NavBar() {
 return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to={"/"}>
        <div
        // onClick={handleClick}
        className="flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer"> 
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
            <Terminal size={18} />
          </div>
          <span className="text-blue-500">DG Hub</span>
        </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="hover:text-white transition-colors capitalize"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to={'signin'}>
          <button className="hidden sm:inline-flex px-4 py-2 border border-white/30 rounded text-white transition">
            Sign In
          </button></Link>
          <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition flex items-center gap-1">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar