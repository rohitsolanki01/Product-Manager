// Modern Landing Page with Hero Section
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  🤖 Product Management
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Manage Your Products
                <span className="text-blue-600"> Smarter & Faster</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                A modern, intuitive platform to organize, track, and manage your entire product inventory. 
                Built for entrepreneurs, startups, and businesses who value efficiency.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {user ? (
                  <Link
                    to="/dashboard"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Go to Dashboard →
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Get Started Free
                    </Link>
                    <Link
                      to="/login"
                      className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-semibold text-center border-2 border-blue-600"
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 font-medium">Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 font-medium">No Credit Card</span>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative">
              <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition duration-300">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  {/* Mock Dashboard Preview */}
                  <div className="flex items-center justify-between">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-8 w-8 bg-blue-100 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                      <div className="h-3 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-6 bg-blue-300 rounded w-1/2"></div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4 space-y-2">
                      <div className="h-3 bg-indigo-200 rounded w-3/4"></div>
                      <div className="h-6 bg-indigo-300 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make product management effortless and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Product Creation</h3>
              <p className="text-gray-600">
                Add products in seconds with our intuitive form. Name, describe, and price your products with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is protected with JWT authentication. Only you can access and manage your products.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Built with modern technologies for instant performance. No lag, no waiting—just pure productivity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edit Anytime</h3>
              <p className="text-gray-600">
                Update product details on the fly. Keep your inventory accurate and up-to-date with real-time editing.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-xl p-8 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beautiful Dashboard</h3>
              <p className="text-gray-600">
                View all your products in a clean, organized interface. Cards or tables—you choose how to visualize.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-linear-to-br from-yellow-50 to-amber-50 rounded-xl p-8 hover:shadow-lg transition group">
              <div className="w-14 h-14 bg-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Responsive</h3>
              <p className="text-gray-600">
                Manage products on the go. Fully responsive design works perfectly on desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From signup to managing products in under 2 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Account</h3>
                <p className="text-gray-600">
                  Sign up for free in seconds. No credit card required. Just your name, email, and password.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Add Products</h3>
                <p className="text-gray-600">
                  Click "Add Product" and fill in the details. Name, description, and price—that's all you need.
                </p>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage & Grow</h3>
                <p className="text-gray-600">
                  Edit, delete, or update products anytime. Track your inventory and watch your business grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Product Management?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of businesses already managing their products smarter
          </p>
          
          {user ? (
            <Link
              to="/dashboard"
              className="inline-block px-10 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Go to Your Dashboard →
            </Link>
          ) : (
            <Link
              to="/register"
              className="inline-block px-10 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Free Today - No Credit Card Required
            </Link>
          )}

          <p className="mt-6 text-blue-200">
            ✨ Free forever • 🔒 Secure & Private • ⚡ Setup in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                🤖 Product Manager
              </h3>
              <p className="text-gray-400 mb-4">
                The modern way to manage your product inventory. Simple, secure, and powerful.
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Product Manager. Built with ❤️ Rohit Solanki
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/register" className="hover:text-white transition">Get Started</Link></li>
                <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/rohitsolanki01" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://x.com/Rohit_01_tech" className="hover:text-white transition">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/rohit-solanki-495860348/" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
