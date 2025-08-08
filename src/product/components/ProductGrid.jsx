import { Heart, ShoppingCart, Zap } from "lucide-react";

export const ProductCardForGrid = ({
    product,
    discount,
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
    <div className={`rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white`}>
      {/* Product Image Section */}
      <div className="relative group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {discount > 0 && (
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              -{discount}%
            </div>
          </div>
        )}

        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white/20 text-white hover:bg-white/30'
          } shadow-lg`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
            <div className="text-white text-xl font-bold">Out of Stock</div>
          </div>
        )}

        {currentVariant.stock <= 3 && currentVariant.stock > 0 && (
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Only {currentVariant.stock} left
            </div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-1">
        <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400 text-sm">
            {'★'.repeat(Math.floor(product.rating))}
          </div>
          <span className={`text-sm text-gray-600`}>
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        <h3 className={`text-xl font-bold mb-2 text-gray-900`}>
          {product.name}
        </h3>
        <p className={`text-sm mb-4 text-gray-600`}>
          {product.description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <span className={`text-2xl font-bold text-gray-900`}>
            ${currentVariant.price}
          </span>
          {currentVariant.originalPrice > currentVariant.price && (
            <span className={`text-lg line-through text-gray-400`}>
              ${currentVariant.originalPrice}
            </span>
          )}
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

        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`w-full mt-auto py-2 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            isOutOfStock
              ? 'bg-gray-400 cursor-not-allowed'
              : isAddedToCart
              ? 'bg-gradient-to-r from-green-500 to-green-600'
              : 'bg-amber-500 hover:bg-orange-400 '
          }`}
        >
          {isOutOfStock ? (
            'Out of Stock'
          ) : isAddedToCart ? (
            'Added to Cart!'
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
