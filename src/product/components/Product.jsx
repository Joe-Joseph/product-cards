import { useState } from "react";
import { ProductCardForList } from "./ProductList";
import { ProductCardForGrid } from "./ProductGrid";

export const ProductCard = ({ product, viewMode }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const currentVariant = product.variants[selectedVariant];
  const isOutOfStock = currentVariant.stock === 0;
  const discount = Math.round(((currentVariant.originalPrice - currentVariant.price) / currentVariant.originalPrice) * 100);

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      setIsAddedToCart(true);
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 2500);
    }
  };

  const handleVariantChange = (index) => {
    setSelectedVariant(index);
    setIsAddedToCart(false);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (viewMode === 'list') {
    return (
      <ProductCardForList
        product={product}
        isFavorite={isFavorite}
        currentVariant={currentVariant}
        handleAddToCart={handleAddToCart}
        toggleFavorite={toggleFavorite}
        isOutOfStock={isOutOfStock}
        isAddedToCart={isAddedToCart}
        handleVariantChange={handleVariantChange}
        selectedVariant={selectedVariant}
      />
    );
  }

  return (
    <ProductCardForGrid
        product={product}
        discount={discount}
        isFavorite={isFavorite}
        currentVariant={currentVariant}
        handleAddToCart={handleAddToCart}
        toggleFavorite={toggleFavorite}
        isOutOfStock={isOutOfStock}
        isAddedToCart={isAddedToCart}
        handleVariantChange={handleVariantChange}
        selectedVariant={selectedVariant}
    />
  );
};