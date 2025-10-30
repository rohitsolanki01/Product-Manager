// Fully Responsive Product Card Component - Grid & List Views
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import toast from 'react-hot-toast';

const ProductCard = ({ product, onDelete, viewMode = 'grid' }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }

    setIsDeleting(true);
    try {
      await api.delete(`/api/products/${product._id}`);
      toast.success('Product deleted successfully');
      onDelete(product._id);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete product');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = () => {
    navigate('/product/edit', { state: { product } });
  };

  // Grid View - Responsive for mobile, tablet, desktop
  if (viewMode === 'grid') {
    return (
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
        {/* Header with gradient - Responsive height */}
        <div className="h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="p-4 sm:p-5 lg:p-6">
          {/* Product Name & Status Badge */}
          <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition line-clamp-2 flex-1 leading-snug">
              {product.name}
            </h3>
            <div className="flex-shrink-0 px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap">
              Active
            </div>
          </div>

          {/* Description - Responsive text and line clamp */}
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {product.description}
          </p>

          {/* Price - Responsive sizing */}
          <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">per unit</span>
          </div>

          {/* Meta Information - Responsive icon and text */}
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="truncate">
              Created {new Date(product.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: window.innerWidth < 640 ? undefined : 'numeric'
              })}
            </span>
          </div>

          {/* Action Buttons - Responsive padding and text */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handleEdit}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center group/btn active:scale-95"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 group-hover/btn:rotate-12 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Edit</span>
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group/btn active:scale-95"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 group-hover/btn:scale-110 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="truncate">{isDeleting ? 'Deleting...' : 'Delete'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // List View - Fully responsive layout
  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          
          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                {/* Product Name - Responsive sizing */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 hover:text-blue-600 transition mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Description - Responsive line clamp */}
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 line-clamp-2 sm:line-clamp-2 mb-2 sm:mb-3 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Meta Info - Responsive icon and text */}
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">
                    {new Date(product.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: window.innerWidth < 640 ? undefined : 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Price - Responsive positioning and sizing */}
          <div className="text-left sm:text-right sm:min-w-[100px] md:min-w-[130px] lg:min-w-[150px] order-last sm:order-none">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1">
              ₹{product.price.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">per unit</div>
          </div>

          {/* Actions - Stack on mobile, column on tablet+ */}
          <div className="flex xs:flex-row sm:flex-col gap-2 w-full sm:w-auto sm:min-w-[100px] lg:min-w-[120px]">
            <button
              onClick={handleEdit}
              className="flex-1 sm:w-full px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-xs sm:text-sm active:scale-95 flex items-center justify-center"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="flex-1 sm:w-full px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm active:scale-95 flex items-center justify-center"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="truncate">{isDeleting ? 'Deleting...' : 'Delete'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
