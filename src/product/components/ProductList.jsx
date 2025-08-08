import { Heart } from "lucide-react";

export const ProductCardForList = ({
    product,
    isFavorite,
    currentVariant,
    handleAddToCart,
    toggleFavorite,
    isOutOfStock,
    isAddedToCart,
    handleVariantChange,
    selectedVariant
}) => {
  return (
    <div className={`rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white`}>
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative sm:w-64 flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 sm:h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-xl font-bold mb-2 text-gray-900`}>
                  {product.name}
                </h3>
                <p className={`text-sm mb-3 text-gray-600`}>
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className={`text-sm text-gray-600`}>
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Variants */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {product.variants.map((variant, index) => (
                    <span
                        key={variant.id}
                        className={`px-2 py-1 text-xs ${selectedVariant === index  ? "dark:bg-gray-700 dark:text-gray-300" : "bg-gray-100   text-gray-600"} rounded-md cursor-pointer`}
                        onClick={() => handleVariantChange(index)}
                    >
                        {variant.name}
                    </span>
                    ))}
                </div>
              </div>
              <button onClick={toggleFavorite} className={`p-2 rounded-full transition-colors ${
                isFavorite ? 'text-red-500' : 'text-gray-500'
              }`}>
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-bold text-gray-900`}>
                  ${currentVariant.price}
                </span>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`px-6 py-2 text-sm rounded-lg font-semibold text-white transition-all duration-300 flex items-center gap-2 ${
                  isOutOfStock
                    ? 'bg-gray-400 cursor-not-allowed'
                    : isAddedToCart
                    ? 'bg-gradient-to-r from-green-500 to-green-600'
                    : 'bg-amber-400 hover:bg-orange-500 '
                }`}
              >
                {isOutOfStock ? 'Out of Stock' : isAddedToCart ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
