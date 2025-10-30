// Fully Responsive Navbar with Mobile Menu
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
    setMobileMenuOpen(false);
  };

  const isLandingPage = location.pathname === '/';

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${isLandingPage ? 'bg-transparent absolute top-0 left-0 right-0 z-10' : 'bg-white shadow-md'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          
          {/* Logo - Responsive Text */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <span className={`text-base sm:text-xl md:text-2xl font-bold transition-colors ${isLandingPage ? 'text-gray-900' : 'text-blue-600'}`}>
              🤖 <span className=" xs:inline">Product Manager</span>
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet, shown on md+ */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {user ? (
              <>
                {/* Welcome Message - Hide on smaller desktops */}
                <span className="text-gray-700 text-sm lg:text-base hidden lg:block">
                  Welcome, <span className="font-semibold">{user.name.split(' ')[0]}</span>
                </span>
                
                {/* Dashboard Link */}
                <Link
                  to="/dashboard"
                  className="px-3 lg:px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition text-sm lg:text-base"
                >
                  Dashboard
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="px-3 lg:px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium text-sm lg:text-base shadow-sm hover:shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Link */}
                <Link
                  to="/login"
                  className={`px-3 lg:px-4 py-2 font-medium transition text-sm lg:text-base ${
                    isLandingPage ? 'text-gray-700 hover:text-gray-900' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Login
                </Link>
                
                {/* Get Started Button */}
                <Link
                  to="/register"
                  className="px-3 lg:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium text-sm lg:text-base shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button - Visible on mobile/tablet only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              // Close Icon
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Shown only when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {user ? (
              <>
                {/* User Welcome Message */}
                <div className="py-3 px-3 text-gray-700 text-sm border-b border-gray-200 bg-gray-50 rounded-lg">
                  <span className="block text-xs text-gray-500 mb-1">Logged in as</span>
                  <span className="font-semibold text-base">{user.name}</span>
                </div>
                
                {/* Dashboard Link */}
                <Link
                  to="/dashboard"
                  onClick={closeMobileMenu}
                  className="flex items-center py-3 px-3 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center py-3 px-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors text-left"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login Link */}
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center py-3 px-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </Link>
                
                {/* Get Started Button */}
                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="flex items-center py-3 px-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors text-center justify-center shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Get Started Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
