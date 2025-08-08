import { useState } from 'react';
import { Grid, List } from 'lucide-react';
import { products } from '../data';
import { ProductCard } from './components/Product';

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'


  return (
    <div className={`min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-50 to-gray-100`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 bg-white/80 border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-4">
              <h1 className={`text-2xl sm:text-3xl font-bold text-gray-900`}>
                TechStore
              </h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* View Toggle */}
              <div className={`flex rounded-lg p-1 bg-gray-200`}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-gray-900'
                      : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white text-gray-900'
                      : 'text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className={`text-xl font-semibold mb-2 text-gray-600`}>
              No available product
            </h3>
          </div>
        ) : (
          <div className={`grid gap-6 sm:gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};



export default ProductGrid;