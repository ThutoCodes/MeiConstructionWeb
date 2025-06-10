import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MEI Construction" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Home
            </Link>
            <Link 
              to="/approach" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Approach
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Projects
            </Link>
            <Link 
              to="/capabilities" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Capabilities
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-2xl text-gray-700">
            <FaBars />
          </button>
        </nav>
      </div>
    </header>
  );
}