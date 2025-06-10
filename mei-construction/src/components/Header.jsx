import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo linking to home */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/mlogo.png"  // <-- direct URL from public folder
              alt="MEI Construction Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/capabilities" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Capabilities
            </Link>
            <Link 
              to="/projects" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-green-600 font-medium transition"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-2xl text-gray-700">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}