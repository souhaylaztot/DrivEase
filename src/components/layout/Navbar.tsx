import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Calendar, Car as CarIcon } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <CarIcon size={24} className="text-blue-900" />
            <span className="text-xl font-bold text-blue-900">DrivEase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/cars" className="text-gray-700 hover:text-blue-900 transition-colors">
              Browse Cars
            </Link>
            <Link to="/offers" className="text-gray-700 hover:text-blue-900 transition-colors">
              Special Offers
            </Link>
            <Link to="/locations" className="text-gray-700 hover:text-blue-900 transition-colors">
              Locations
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About Us
            </Link>
          </div>

          {/* Desktop Account/Login */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/bookings" className="text-gray-700 hover:text-blue-900">
              <Calendar size={20} />
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">
                <User size={16} className="mr-1.5" />
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-100 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/cars" 
                className="text-gray-700 hover:text-blue-900 py-2"
                onClick={toggleMenu}
              >
                Browse Cars
              </Link>
              <Link 
                to="/offers" 
                className="text-gray-700 hover:text-blue-900 py-2"
                onClick={toggleMenu}
              >
                Special Offers
              </Link>
              <Link 
                to="/locations" 
                className="text-gray-700 hover:text-blue-900 py-2"
                onClick={toggleMenu}
              >
                Locations
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-900 py-2"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/bookings" 
                className="text-gray-700 hover:text-blue-900 py-2"
                onClick={toggleMenu}
              >
                My Bookings
              </Link>
              <div className="flex space-x-2 pt-2">
                <Link to="/login" className="w-1/2">
                  <Button variant="outline" fullWidth onClick={toggleMenu}>
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" className="w-1/2">
                  <Button fullWidth onClick={toggleMenu}>
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;